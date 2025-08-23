'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FeedSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [slideDown, setSlideDown] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15
  
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

  const initialNewsItems = allNewsItems.slice(0, 3)
  const newsItems = isExpanded ? allNewsItems : initialNewsItems

  return (
    <motion.section
      animate={slideDown ? { y: 200 } : { y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (slideDown) {
          setIsExpanded(false)
          setSlideDown(false)
        }
      }}
      className="pt-8 pb-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          最新AI动态
        </h2>
        <motion.div
          ref={listRef}
          layout
          className={`grid gap-6 max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* 第一排始终显示，无动画 */}
          {initialNewsItems.map((item) => (
            <article
              key={item.id}
              className="relative rounded-xl p-6 cursor-pointer border border-white/20 overflow-hidden transition-all duration-300"
              style={{
                backdropFilter: 'blur(8px) saturate(180%)',
                WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 100%)',
                boxShadow: `
                  0 8px 32px rgba(0,0,0,0.1),
                  0 0 0 1px rgba(255,255,255,0.2) inset,
                  0 1px 0 rgba(255,255,255,0.4) inset
                `
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `
                  0 12px 40px rgba(0,0,0,0.15),
                  0 0 0 1px rgba(255,255,255,0.3) inset,
                  0 1px 0 rgba(255,255,255,0.5) inset
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 100%)';
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = `
                  0 8px 32px rgba(0,0,0,0.1),
                  0 0 0 1px rgba(255,255,255,0.2) inset,
                  0 1px 0 rgba(255,255,255,0.4) inset
                `;
              }}
            >
              {/* ...卡片内容同原来... */}
              <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-xl" style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 60%)`,
                }}></div>
                <div className="absolute inset-0 rounded-xl" style={{
                  background: `
                    radial-gradient(ellipse 40% 60% at 25% 30%, rgba(255,255,255,0.2) 0%, transparent 70%),
                    radial-gradient(ellipse 35% 55% at 75% 70%, rgba(255,255,255,0.15) 0%, transparent 70%)
                  `,
                  filter: 'blur(1px)',
                  opacity: '0.6',
                }}></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-pill text-sm font-medium ${
                    item.category === '学术' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-3">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    来源: {item.source}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-pill hover:bg-blue-50 transition-colors">
                    阅读更多 →
                  </button>
                </div>
              </div>
            </article>
          ))}
          {/* 展开时新增卡片做动画 */}
          <AnimatePresence>
            {isExpanded && allNewsItems.slice(3).map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative rounded-xl p-6 cursor-pointer border border-white/20 overflow-hidden transition-all duration-300"
                style={{
                  backdropFilter: 'blur(8px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 100%)',
                  boxShadow: `
                    0 8px 32px rgba(0,0,0,0.1),
                    0 0 0 1px rgba(255,255,255,0.2) inset,
                    0 1px 0 rgba(255,255,255,0.4) inset
                  `
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 100%)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `
                    0 12px 40px rgba(0,0,0,0.15),
                    0 0 0 1px rgba(255,255,255,0.3) inset,
                    0 1px 0 rgba(255,255,255,0.5) inset
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 100%)';
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px rgba(0,0,0,0.1),
                    0 0 0 1px rgba(255,255,255,0.2) inset,
                    0 1px 0 rgba(255,255,255,0.4) inset
                  `;
                }}
              >
                {/* ...卡片内容同原来... */}
                <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-xl" style={{
                    background: `linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 60%)`,
                  }}></div>
                  <div className="absolute inset-0 rounded-xl" style={{
                    background: `
                      radial-gradient(ellipse 40% 60% at 25% 30%, rgba(255,255,255,0.2) 0%, transparent 70%),
                      radial-gradient(ellipse 35% 55% at 75% 70%, rgba(255,255,255,0.15) 0%, transparent 70%)
                    `,
                    filter: 'blur(1px)',
                    opacity: '0.6',
                  }}></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-pill text-sm font-medium ${
                      item.category === '学术' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-3">
                    {item.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      来源: {item.source}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-pill hover:bg-blue-50 transition-colors">
                      阅读更多 →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* 分页器 - 只在展开状态显示 */}
        {isExpanded && (
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              className="px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              上一页
            </button>
            
            <div className="flex space-x-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === page 
                      ? 'relative border border-white/20 overflow-hidden text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                  style={currentPage === page ? {
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
                  onMouseMove={currentPage === page ? (e) => {
                    // 简化为只保持基本的阴影效果
                    e.currentTarget.style.transition = 'box-shadow 0.15s ease-out';
                    e.currentTarget.style.boxShadow = `
                      0 12px 40px rgba(59,130,246,0.4),
                      0 0 20px rgba(59,130,246,0.4),
                      0 0 0 1px rgba(255,255,255,0.2) inset,
                      0 1px 0 rgba(255,255,255,0.3) inset
                    `;
                  } : undefined}
                  onMouseLeave={currentPage === page ? (e) => {
                    // 保持一致的阴影效果
                    e.currentTarget.style.transition = 'box-shadow 0.3s ease-out';
                    e.currentTarget.style.boxShadow = `
                      0 12px 40px rgba(59,130,246,0.4),
                      0 0 20px rgba(59,130,246,0.4),
                      0 0 0 1px rgba(255,255,255,0.2) inset,
                      0 1px 0 rgba(255,255,255,0.3) inset
                    `;
                  } : undefined}
                  onMouseEnter={currentPage === page ? (e) => {
                    // 初始进入时设置较快的过渡
                    e.currentTarget.style.transition = 'box-shadow 0.2s ease-out';
                  } : undefined}
                >
                  {currentPage === page && (
                    <>
                      {/* 按钮内部光晕效果 */}
                      <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
                        {/* 内部高光 */}
                        <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-lg" style={{
                          background: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 60%)`,
                        }}></div>
                      </div>
                    </>
                  )}
                  
                  <span className={currentPage === page ? "relative z-10" : ""}>
                    {currentPage === page ? (
                      page.toString().split('').map((char, index) => (
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
                      ))
                    ) : (
                      page
                    )}
                  </span>
                </button>
              ))}
            </div>
            
            <button 
              className="px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
              disabled={currentPage === 3}
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
            onClick={() => {
              if (isExpanded) {
                setSlideDown(true)
              } else {
                setIsExpanded(true)
              }
            }}
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
    </motion.section>
  )
}

export default FeedSection
