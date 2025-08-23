"use client"

import { useEffect, useState } from 'react'

type NewsItem = {
  id: number
  title: string
  summary: string
  category: string
  date: string
  source?: string
  link?: string
}

const FeedSection = () => {
  const [news, setNews] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    fetch('/vb_news.json')
      .then(r => r.json())
      .then(data => setNews(data))
      .catch(() => setError('加载失败'))
    return () => { mounted = false }
  }, [])

  const initialNewsItems = allNewsItems.slice(0, 6)
  const totalPages = Math.max(1, Math.ceil(allNewsItems.length / pageSize))

  // Ensure currentPage is within range
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages)

  const newsItems = isExpanded
    ? allNewsItems.slice((safeCurrentPage - 1) * pageSize, safeCurrentPage * pageSize)
    : initialNewsItems

  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">最新AI动态（简化测试）</h2>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <ul>
          {news.map((item, idx) => (
            <li key={idx} className="mb-4 p-4 border rounded">
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-600">{item.summary}</div>
            </li>
          ))}
        </ul>
      </div>
        
        {/* 分页器 - 只在展开状态显示 */}
        {isExpanded && (
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              className="px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              onClick={() => setCurrentPage(Math.max(1, safeCurrentPage - 1))}
              disabled={safeCurrentPage === 1}
            >
              上一页
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                    safeCurrentPage === page 
                      ? 'relative border border-white/20 overflow-hidden text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                  style={safeCurrentPage === page ? {
                    backdropFilter: 'blur(8px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                    background: 'linear-gradient(135deg, rgba(59,130,246,1) 0%, rgba(37,99,235,0.9) 50%, rgba(29,78,216,1) 100%)',
                    boxShadow: `
                      0 12px 40px rgba(59,130,246,0.4),
                      0 0 20px rgba(59,130,246,0.4),
                      0 0 0 1px rgba(255,255,255,0.2) inset,
                      0 1px 0 rgba(255,255,255,0.3) inset
                    `
                  } : {}}
                  onClick={() => setCurrentPage(page)}
                >
                  <span className={safeCurrentPage === page ? "relative z-10" : ""}>
                    {page}
                  </span>
                </button>
              ))}
            </div>

            <button 
              className="px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              onClick={() => setCurrentPage(Math.min(totalPages, safeCurrentPage + 1))}
              disabled={safeCurrentPage === totalPages}
            >
              下一页
            </button>
          </div>
        )}
        
        <div className="text-center mt-12">
          <button 
            className="relative px-8 py-3 rounded-pill text-white font-medium border border-white/20 overflow-hidden transition-all duration-300 group"
            style={{
              backdropFilter: 'blur(8px) saturate(180%)',
              WebkitBackdropFilter: 'blur(8px) saturate(180%)',
              background: 'linear-gradient(135deg, rgba(59,130,246,1) 0%, rgba(37,99,235,0.9) 50%, rgba(29,78,216,1) 100%)',
              boxShadow: `
                0 12px 40px rgba(59,130,246,0.4),
                0 0 20px rgba(59,130,246,0.4),
                0 0 0 1px rgba(255,255,255,0.2) inset,
                0 1px 0 rgba(255,255,255,0.3) inset
              `
            }}
            onClick={() => { setIsExpanded(!isExpanded); setCurrentPage(1); }}
            onMouseMove={(e) => {
              // 简化为只保持基本的阴影效果
              e.currentTarget.style.transition = 'box-shadow 0.15s ease-out';
              e.currentTarget.style.boxShadow = `
                0 12px 40px rgba(59,130,246,0.4),
                0 0 20px rgba(59,130,246,0.4),
                0 0 0 1px rgba(255,255,255,0.2) inset,
                0 1px 0 rgba(255,255,255,0.3) inset
              `;
            }}
            onMouseLeave={(e) => {
              // 保持一致的阴影效果
              e.currentTarget.style.transition = 'box-shadow 0.3s ease-out';
              e.currentTarget.style.boxShadow = `
                0 12px 40px rgba(59,130,246,0.4),
                0 0 20px rgba(59,130,246,0.4),
                0 0 0 1px rgba(255,255,255,0.2) inset,
                0 1px 0 rgba(255,255,255,0.3) inset
              `;
            }}
            onMouseEnter={(e) => {
              // 初始进入时设置较快的过渡
              e.currentTarget.style.transition = 'box-shadow 0.2s ease-out';
            }}
          >
            {/* 按钮内部光晕效果 */}
            <div className="absolute inset-0 rounded-pill pointer-events-none overflow-hidden">
              {/* 内部高光 */}
              <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-pill" style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 60%)`,
              }}></div>
            </div>
            
            <span className="relative z-10">
              {(isExpanded ? '收起更多动态' : '查看更多动态').split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-300 ease-out"
                  style={{
                    textShadow: '0 0 0px rgba(255,255,255,0)',
                    filter: 'drop-shadow(0 0 0px rgba(255,255,255,0))'
                  }}
                  onMouseEnter={(e) => {
                    // 获取所有兄弟元素
                    const siblings = Array.from(e.currentTarget.parentElement?.children || []) as HTMLElement[];
                    
                    siblings.forEach((sibling, siblingIndex) => {
                      const distance = Math.abs(siblingIndex - index);
                      let intensity = 0;
                      
                      if (distance === 0) {
                        intensity = 1; // 当前字符最亮
                      } else if (distance === 1) {
                        intensity = 0.6; // 相邻字符中等亮度
                      } else if (distance === 2) {
                        intensity = 0.3; // 距离2的字符较暗
                      }
                      
                      if (intensity > 0) {
                        sibling.style.textShadow = `
                          0 0 ${8 * intensity}px rgba(255,255,255,${0.8 * intensity}),
                          0 0 ${16 * intensity}px rgba(255,255,255,${0.4 * intensity}),
                          0 0 ${24 * intensity}px rgba(255,255,255,${0.2 * intensity})
                        `;
                        sibling.style.filter = `drop-shadow(0 0 ${4 * intensity}px rgba(255,255,255,${0.6 * intensity}))`;
                      } else {
                        sibling.style.textShadow = '0 0 0px rgba(255,255,255,0)';
                        sibling.style.filter = 'drop-shadow(0 0 0px rgba(255,255,255,0))';
                      }
                    });
                  }}
                  onMouseLeave={(e) => {
                    // 移除所有兄弟元素的光晕效果
                    const siblings = Array.from(e.currentTarget.parentElement?.children || []) as HTMLElement[];
                    siblings.forEach((sibling) => {
                      sibling.style.textShadow = '0 0 0px rgba(255,255,255,0)';
                      sibling.style.filter = 'drop-shadow(0 0 0px rgba(255,255,255,0))';
                    });
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeedSection
