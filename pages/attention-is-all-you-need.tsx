import React from 'react';
import PageTemplate from '@/components/PageTemplate';

const AttentionIsAllYouNeed = () => {
  const title = "Attention Is All You Need";
  const content = `
    <p><strong>作者:</strong> Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin</p>
    <p><strong>期刊:</strong> NeurIPS 2017</p>
    <p><strong>引用:</strong> 50000+</p>
    <p>首次提出 Transformer 架构，使用自注意力（self-attention）替代循环/卷积结构，显著提高并行效率并成为后续大规模语言模型与视觉 Transformer 的基础。</p>
  `;
  const relatedArticles = [
    { title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", link: "/bert-pretraining" },
    { title: "Language Models are Few-Shot Learners (GPT-3)", link: "/gpt-3" },
    { title: "Vision Transformers: A Survey", link: "/vision-transformers" },
  ];

  return <PageTemplate title={title} content={content} relatedArticles={relatedArticles} />;
};

export default AttentionIsAllYouNeed;
