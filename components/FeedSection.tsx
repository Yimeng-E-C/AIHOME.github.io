'use client'

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './FeedSection.css';

const FeedSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // 扩展的新闻数据（5*3=15项）
  const allNewsItems = [
    {
      id: 1,
      title: "OpenAI发布GPT-5预览版本",
      summary: "OpenAI今日宣布GPT-5的早期预览版本，在推理能力和多模态理解方面有显著提升...",
      category: "学术",
      date: "2025-08-21",
      source: "OpenAI",
    },
    {
      id: 2,
      title: "Google推出新一代AI芯片TPU v6",
      summary: "Google发布了专为AI训练优化的TPU v6芯片，性能相比前代提升300%...",
      category: "应用",
      date: "2025-08-20",
      source: "Google",
    },
    {
      id: 3,
      title: "清华大学发布多模态大模型研究",
      summary: "清华大学AI实验室在Nature发表最新研究，提出了新的多模态融合架构...",
      category: "学术",
      date: "2025-08-19",
      source: "清华大学",
    },
    {
      id: 4,
      title: "Meta推出Llama 3.1升级版",
      summary: "Meta发布Llama 3.1的重大更新，支持更长的上下文窗口和更强的代码生成能力...",
      category: "应用",
      date: "2025-08-18",
      source: "Meta",
    },
    {
      id: 5,
      title: "MIT发布新型神经网络架构",
      summary: "MIT研究团队提出了一种革命性的神经网络架构，能耗降低80%而性能提升20%...",
      category: "学术",
      date: "2025-08-17",
      source: "MIT",
    },
    {
      id: 6,
      title: "微软Azure AI服务全面升级",
      summary: "微软宣布Azure AI服务的全面升级，新增多项企业级AI工具和API接口...",
      category: "应用",
      date: "2025-08-16",
      source: "微软",
    },
    {
      id: 7,
      title: "斯坦福大学发布AI安全新标准",
      summary: "斯坦福大学AI实验室发布了针对大模型的安全评估新标准，得到业界广泛认可...",
      category: "学术",
      date: "2025-08-15",
      source: "斯坦福大学",
    },
    {
      id: 8,
      title: "英伟达发布新一代GPU架构",
      summary: "英伟达公布了专为AI训练设计的新GPU架构，AI计算性能提升500%...",
      category: "应用",
      date: "2025-08-14",
      source: "英伟达",
    },
    {
      id: 9,
      title: "DeepMind在蛋白质折叠领域新突破",
      summary: "DeepMind的AlphaFold 3在蛋白质结构预测方面取得重大突破，准确率达到95%...",
      category: "学术",
      date: "2025-08-13",
      source: "DeepMind",
    },
    {
      id: 10,
      title: "百度文心一言4.0正式发布",
      summary: "百度发布文心一言4.0版本，在中文理解和生成能力方面达到国际先进水平...",
      category: "应用",
      date: "2025-08-12",
      source: "百度",
    },
    {
      id: 11,
      title: "CMU发布多智能体协作新框架",
      summary: "卡内基梅隆大学提出了新的多智能体协作框架，在复杂任务协调方面表现出色...",
      category: "学术",
      date: "2025-08-11",
      source: "CMU",
    },
    {
      id: 12,
      title: "Amazon推出新一代AI助手Alexa Pro",
      summary: "亚马逊发布了基于GPT技术的新一代AI助手，支持更自然的对话和任务执行...",
      category: "应用",
      date: "2025-08-10",
      source: "Amazon",
    },
    {
      id: 13,
      title: "北京大学在视觉AI领域获得突破",
      summary: "北大计算机学院在计算机视觉领域取得重大突破，新算法在多个基准测试中创纪录...",
      category: "学术",
      date: "2025-08-09",
      source: "北京大学",
    },
    {
      id: 14,
      title: "特斯拉FSD技术重大更新",
      summary: "特斯拉发布FSD完全自动驾驶技术的重大更新，安全性和可靠性显著提升...",
      category: "应用",
      date: "2025-08-08",
      source: "特斯拉",
    },
    {
      id: 15,
      title: "OpenAI发布AI安全研究报告",
      summary: "OpenAI发布年度AI安全研究报告，详细阐述了大模型安全性的最新进展和挑战...",
      category: "学术",
      date: "2025-08-07",
      source: "OpenAI",
    },
  ]

  const initialNewsItems = allNewsItems.slice(0, 6); // Always show the first two rows (6 items)
  const extraNewsItems = allNewsItems.slice(6); // Remaining items for expansion

  const cardStyle = {
    backdropFilter: 'blur(8px) saturate(180%)',
    WebkitBackdropFilter: 'blur(8px) saturate(180%)',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 100%)',
    boxShadow: `
      0 8px 32px rgba(0,0,0,0.1),
      0 0 0 1px rgba(255,255,255,0.2) inset,
      0 1px 0 rgba(255,255,255,0.4) inset
    `,
    transition: 'box-shadow 0.3s ease, transform 0.3s ease'
  };

  const hoverStyle = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 100%)',
    transform: 'translateY(-2px)',
    boxShadow: `
      0 12px 40px rgba(59,130,246,0.2),
      0 0 20px rgba(59,130,246,0.2),
      0 0 0 1px rgba(255,255,255,0.3) inset,
      0 1px 0 rgba(255,255,255,0.5) inset
    `
  };

  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          最新AI动态
        </h2>
        <div className={`grid gap-6 max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
          {initialNewsItems.map((item) => (
            <article
              key={item.id}
              className="relative rounded-xl p-6 border border-gray-200 overflow-hidden transition-all duration-300"
              style={cardStyle}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, hoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, cardStyle);
              }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.summary}</p>
              <span className="text-sm text-gray-500">来源: {item.source}</span>
            </article>
          ))}
        </div>
        <CSSTransition
          in={isExpanded}
          timeout={300}
          classNames="expand"
          unmountOnExit
        >
          <div className={`grid gap-6 max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6`}>
            {extraNewsItems.map((item) => (
              <article
                key={item.id}
                className="relative rounded-xl p-6 border border-gray-200 overflow-hidden transition-all duration-300"
                style={cardStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, hoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, cardStyle);
                }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.summary}</p>
                <span className="text-sm text-gray-500">来源: {item.source}</span>
              </article>
            ))}
          </div>
        </CSSTransition>
        <div className="text-center mt-12">
          <button 
            className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? '收起更多动态' : '查看更多动态'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
