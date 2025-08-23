#!/usr/bin/env python3
"""
Fetch latest AI news from several RSS feeds, translate titles to Chinese using LibreTranslate (public),
merge and sort by pub date, and write to public/vb_news.json.

Usage: python3 scripts/update_news.py
"""
import json
import re
import sys
from urllib.request import Request, urlopen
from urllib.parse import urlencode
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime

RSS_SOURCES = [
    'https://venturebeat.com/feed/',
    'https://www.artificialintelligence-news.com/rss',
    # additional AI news / blog RSS feeds
    'https://openai.com/blog/rss/',
    'https://ai.googleblog.com/feeds/posts/default?alt=rss',
    'https://www.infoq.com/artificial-intelligence/rss',
]

import os

TRANSLATE_API = 'https://libretranslate.de/translate'

GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')

def fetch_rss(url, max_items=10):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urlopen(req, timeout=15) as r:
            data = r.read()
    except Exception as e:
        print(f'ERROR_FETCH {url} {e}', file=sys.stderr)
        return []
    try:
        root = ET.fromstring(data)
    except Exception as e:
        print(f'ERROR_PARSE {url} {e}', file=sys.stderr)
        return []

    items = []
    for item in root.findall('.//item')[:max_items]:
        title = (item.findtext('title') or '').strip()
        link = (item.findtext('link') or '').strip()
        pub = (item.findtext('pubDate') or '').strip()
        desc = (item.findtext('description') or '')
        try:
            dt = parsedate_to_datetime(pub)
            date = dt.strftime('%Y-%m-%d')
            ts = dt.timestamp()
        except Exception:
            date = pub
            ts = 0
        items.append({'title': title, 'link': link, 'date': date, 'summary': desc, 'ts': ts})
    return items

def translate_text(text):
    # Prefer Google Cloud Translate if API key provided
    if GOOGLE_API_KEY:
        try:
            url = f'https://translation.googleapis.com/language/translate/v2?key={GOOGLE_API_KEY}'
            payload = urlencode({'q': text, 'source': 'en', 'target': 'zh', 'format': 'text'}).encode()
            req = Request(url, data=payload, headers={'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/x-www-form-urlencoded'})
            with urlopen(req, timeout=15) as r:
                res = json.loads(r.read())
                return res['data']['translations'][0]['translatedText']
        except Exception as e:
            print('WARN google translate failed, falling back to LibreTranslate', e, file=sys.stderr)

    # fallback to LibreTranslate public instance
    try:
        data = urlencode({'q': text, 'source': 'en', 'target': 'zh', 'format': 'text'}).encode()
        req = Request(TRANSLATE_API, data=data, headers={'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/x-www-form-urlencoded'})
        with urlopen(req, timeout=15) as r:
            res = json.loads(r.read())
            # LibreTranslate returns {'translatedText': '...'} or similar
            if isinstance(res, dict):
                return res.get('translatedText') or res.get('translated_text') or text
            return text
    except Exception as e:
        # fallback: return original
        print('WARN translate failed', e, file=sys.stderr)
        return text

def strip_html(s):
    return re.sub('<[^>]+>', '', s or '')

def main():
    all_items = []
    for src in RSS_SOURCES:
        items = fetch_rss(src, max_items=10)
        all_items.extend(items)

    if not all_items:
        print('No items fetched', file=sys.stderr)
        sys.exit(1)

    # sort by timestamp desc
    all_items = sorted(all_items, key=lambda x: x.get('ts', 0), reverse=True)

    # limit up to 40 items
    all_items = all_items[:40]

    out = []
    for i, it in enumerate(all_items, start=1):
        title_en = it.get('title','')
        title_cn = translate_text(title_en)
        summary = strip_html(it.get('summary',''))[:300]
        out.append({
            'id': i,
            'title': title_cn,
            'title_en': title_en,
            'summary': summary,
            'category': '新闻',
            'date': it.get('date',''),
            'source': '',
            'link': it.get('link','')
        })

    with open('public/vb_news.json', 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print('WROTE', len(out), 'items to public/vb_news.json')

if __name__ == '__main__':
    main()
