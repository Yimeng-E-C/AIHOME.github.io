'use client'

import Link from 'next/link'

const Hero = () => {
  const navigationItems = [
    {
      title: "学术前沿",
      description: "追踪最新AI研究动态",
      href: "/academic",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "商业应用",
      description: "发现AI的商业价值",
      href: "/applications",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "快捷工具",
      description: "直达各大AI平台",
      href: "/links",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    }
  ]

  return (
    <>
      <style jsx>{`
        @keyframes glow-flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow: 
              0 0 4px rgba(255,255,255,0.3),
              0 0 8px rgba(255,255,255,0.2),
              0 0 12px rgba(255,255,255,0.1),
              0 2px 4px rgba(0,0,0,0.3);
            filter: drop-shadow(0 0 3px rgba(255,255,255,0.2));
          }
          20%, 24%, 55% {
            text-shadow: 
              0 0 6px rgba(255,255,255,0.4),
              0 0 10px rgba(255,255,255,0.3),
              0 0 14px rgba(255,255,255,0.2),
              0 2px 4px rgba(0,0,0,0.3);
            filter: drop-shadow(0 0 5px rgba(255,255,255,0.3));
          }
        }
        
        .title-char {
          animation: glow-flicker 4s linear infinite;
        }
        
        .title-char.no-animation {
          animation: none !important;
        }
      `}</style>
      <section className="pt-28 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative flex justify-center opacity-75">
            {'AIHOME'.split('').map((char, index) => (
              <span
                key={index}
                className="title-char relative transition-all duration-300 ease-out text-white"
                style={{
                  textShadow: `
                    0 0 4px rgba(255,255,255,0.3),
                    0 0 8px rgba(255,255,255,0.2),
                    0 0 12px rgba(255,255,255,0.1),
                    0 2px 4px rgba(0,0,0,0.3)
                  `,
                  filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.2))',
                }}
                onMouseEnter={(e) => {
                  // 停止闪烁动画
                  e.currentTarget.classList.add('no-animation');
                  
                  // 当前字符最强光晕
                  e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(255,255,255,0.8))';
                  e.currentTarget.style.textShadow = `
                    0 0 8px rgba(255,255,255,0.8),
                    0 0 16px rgba(255,255,255,0.6),
                    0 2px 4px rgba(0,0,0,0.3)
                  `;
                  
                  // 相邻字符递减光晕并停止动画
                  const siblings = e.currentTarget.parentElement?.children;
                  if (siblings) {
                    Array.from(siblings).forEach((sibling, siblingIndex) => {
                      const distance = Math.abs(siblingIndex - index);
                      (sibling as HTMLElement).classList.add('no-animation');
                      
                      if (distance === 1) {
                        // 相邻1个字符
                        (sibling as HTMLElement).style.filter = 'drop-shadow(0 0 8px rgba(255,255,255,0.5))';
                        (sibling as HTMLElement).style.textShadow = `
                          0 0 6px rgba(255,255,255,0.5),
                          0 0 12px rgba(255,255,255,0.3),
                          0 2px 4px rgba(0,0,0,0.3)
                        `;
                      } else if (distance === 2) {
                        // 相邻2个字符
                        (sibling as HTMLElement).style.filter = 'drop-shadow(0 0 4px rgba(255,255,255,0.3))';
                        (sibling as HTMLElement).style.textShadow = `
                          0 0 4px rgba(255,255,255,0.3),
                          0 0 8px rgba(255,255,255,0.2),
                          0 2px 4px rgba(0,0,0,0.3)
                        `;
                      }
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  // 重置所有字符并恢复闪烁动画
                  const siblings = e.currentTarget.parentElement?.children;
                  if (siblings) {
                    Array.from(siblings).forEach((sibling) => {
                      (sibling as HTMLElement).classList.remove('no-animation');
                      (sibling as HTMLElement).style.filter = 'drop-shadow(0 0 3px rgba(255,255,255,0.2))';
                      (sibling as HTMLElement).style.textShadow = `
                        0 0 4px rgba(255,255,255,0.3),
                        0 0 8px rgba(255,255,255,0.2),
                        0 0 12px rgba(255,255,255,0.1),
                        0 2px 4px rgba(0,0,0,0.3)
                      `;
                    });
                  }
                }}
              >
                {char}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto relative flex justify-center whitespace-nowrap opacity-75">
            {'您的AI信息聚合平台，追踪前沿学术研究，发现商业应用，探索AI世界'.split('').map((char, index) => (
              <span
                key={index}
                className="relative transition-all duration-300 ease-out text-white"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => {
                  // 当前字符最强光晕
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255,255,255,0.7))';
                  e.currentTarget.style.textShadow = `
                    0 0 6px rgba(255,255,255,0.7),
                    0 0 12px rgba(255,255,255,0.5),
                    0 1px 2px rgba(0,0,0,0.3)
                  `;
                  
                  // 相邻字符递减光晕
                  const siblings = e.currentTarget.parentElement?.children;
                  if (siblings) {
                    Array.from(siblings).forEach((sibling, siblingIndex) => {
                      const distance = Math.abs(siblingIndex - index);
                      if (distance === 1) {
                        (sibling as HTMLElement).style.filter = 'drop-shadow(0 0 6px rgba(255,255,255,0.4))';
                        (sibling as HTMLElement).style.textShadow = `
                          0 0 4px rgba(255,255,255,0.4),
                          0 0 8px rgba(255,255,255,0.3),
                          0 1px 2px rgba(0,0,0,0.3)
                        `;
                      } else if (distance === 2) {
                        (sibling as HTMLElement).style.filter = 'drop-shadow(0 0 3px rgba(255,255,255,0.2))';
                        (sibling as HTMLElement).style.textShadow = `
                          0 0 2px rgba(255,255,255,0.2),
                          0 0 4px rgba(255,255,255,0.1),
                          0 1px 2px rgba(0,0,0,0.3)
                        `;
                      }
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  // 重置所有字符
                  const siblings = e.currentTarget.parentElement?.children;
                  if (siblings) {
                    Array.from(siblings).forEach((sibling) => {
                      (sibling as HTMLElement).style.filter = 'none';
                      (sibling as HTMLElement).style.textShadow = '0 1px 2px rgba(0,0,0,0.3)';
                    });
                  }
                }}
              >
                {char}
              </span>
            ))}
          </p>
          
          {/* 移动端：横向排列的图标 */}
          <div className="flex justify-center items-center gap-8 md:hidden mb-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex flex-col items-center"
              >
                <div className={`relative w-16 h-16 backdrop-blur-lg backdrop-saturate-[180%] rounded-xl flex items-center justify-center mb-2 transition-transform duration-300 ease-out text-white border border-white/20 shadow-2xl overflow-hidden`}
                style={{
                  backdropFilter: 'blur(8px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)',
                  boxShadow: `
                    0 8px 32px rgba(0,0,0,0.12),
                    0 0 0 1px rgba(255,255,255,0.08) inset,
                    0 1px 0 rgba(255,255,255,0.25) inset
                  `
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  
                  // 计算鼠标相对于图标中心的位置百分比
                  const xPercent = (x / rect.width) * 100;
                  const yPercent = (y / rect.height) * 100;
                  
                  // 光晕效果
                  e.currentTarget.style.background = `
                    radial-gradient(circle 70px at ${xPercent}% ${yPercent}%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.02) 100%),
                    linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)
                  `;
                  
                  // 阴影效果
                  const shadowX = (x - centerX) / 8;
                  const shadowY = (y - centerY) / 8;
                  e.currentTarget.style.boxShadow = `
                    ${shadowX}px ${shadowY}px 35px rgba(255,255,255,0.4),
                    0 8px 32px rgba(0,0,0,0.12),
                    0 0 0 1px rgba(255,255,255,0.15) inset,
                    0 1px 0 rgba(255,255,255,0.4) inset
                  `;
                  
                  // 光晕层
                  const glowLayer = e.currentTarget.querySelector('.mobile-glow-layer') as HTMLElement;
                  if (glowLayer) {
                    glowLayer.style.background = `radial-gradient(circle 80px at ${xPercent}% ${yPercent}%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`;
                    glowLayer.style.opacity = '1';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)';
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px rgba(0,0,0,0.12),
                    0 0 0 1px rgba(255,255,255,0.08) inset,
                    0 1px 0 rgba(255,255,255,0.25) inset
                  `;
                  
                  // 隐藏光晕层
                  const glowLayer = e.currentTarget.querySelector('.mobile-glow-layer') as HTMLElement;
                  if (glowLayer) {
                    glowLayer.style.opacity = '0';
                  }
                }}>
                  {/* 跟随鼠标的光晕层 - 移动端 */}
                  <div className="mobile-glow-layer absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ease-out opacity-0"></div>
                  
                  {/* 内部光晕效果 */}
                  <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* 简化的玻璃效果层 */}
                  <div className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden">
                    {/* 顶部高光 - 收窄弧度 */}
                    <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-inherit" style={{
                      background: `linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 30%)`,
                    }}></div>
                    
                    {/* 散射效果 - 大幅收窄 */}
                    <div className="absolute inset-0 rounded-inherit" style={{
                      background: `
                        radial-gradient(ellipse 15% 20% at 30% 35%, rgba(255,255,255,0.05) 0%, transparent 40%),
                        radial-gradient(ellipse 12% 18% at 70% 65%, rgba(255,255,255,0.04) 0%, transparent 40%)
                      `,
                      filter: 'blur(0.3px)',
                      opacity: '0.2',
                    }}></div>
                  </div>
                  
                  {/* 液态玻璃扭曲折射效果层 - 大幅收窄 */}
                  <div className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden">
                    {/* 弧面反射高光 - 收窄弧度 */}
                    <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-inherit" style={{
                      background: `
                        radial-gradient(ellipse 40% 20% at 50% -5%, rgba(255,255,255,0.2) 0%, transparent 50%),
                        linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 25%)
                      `,
                      transform: 'perspective(150px) rotateX(15deg) scaleY(0.3)',
                      transformOrigin: 'center top',
                    }}></div>
                    
                    {/* 折射扭曲线条 - 收窄效果 */}
                    <div className="absolute inset-0 rounded-inherit" style={{
                      background: `
                        linear-gradient(45deg, transparent 47%, rgba(255,255,255,0.06) 49%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.06) 51%, transparent 53%),
                        linear-gradient(-45deg, transparent 67%, rgba(255,255,255,0.04) 69%, rgba(255,255,255,0.08) 70%, rgba(255,255,255,0.04) 71%, transparent 73%)
                      `,
                      filter: 'blur(0.1px)',
                      opacity: '0.4',
                    }}></div>
                    
                    {/* 液态散射效果 - 大幅收窄 */}
                    <div className="absolute inset-0 rounded-inherit" style={{
                      background: `
                        radial-gradient(ellipse 15% 20% at 30% 35%, rgba(255,255,255,0.08) 0%, transparent 40%),
                        radial-gradient(ellipse 12% 18% at 70% 65%, rgba(255,255,255,0.05) 0%, transparent 40%)
                      `,
                      filter: 'blur(0.3px)',
                      opacity: '0.3',
                    }}></div>
                  </div>
                  <div className="relative z-10">
                    {item.icon}
                  </div>
                </div>
                <span className="text-sm font-medium text-white/90 drop-shadow">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          {/* 桌面端：卡片布局 */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative backdrop-blur-lg backdrop-saturate-[180%] rounded-xl p-6 shadow-2xl transition-transform duration-300 ease-out cursor-pointer border border-white/20 overflow-hidden"
                style={{
                  backdropFilter: 'blur(8px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)',
                  boxShadow: `
                    0 8px 32px rgba(0,0,0,0.12),
                    0 0 0 1px rgba(255,255,255,0.08) inset,
                    0 1px 0 rgba(255,255,255,0.25) inset
                  `
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  
                  // 计算鼠标相对于卡片中心的位置百分比
                  const xPercent = (x / rect.width) * 100;
                  const yPercent = (y / rect.height) * 100;
                  
                  // 光晕效果
                  e.currentTarget.style.background = `
                    radial-gradient(circle 200px at ${xPercent}% ${yPercent}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.02) 75%, rgba(255,255,255,0.005) 100%),
                    linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)
                  `;
                  
                  // 阴影效果
                  const shadowX = (x - centerX) / 10;
                  const shadowY = (y - centerY) / 10;
                  e.currentTarget.style.boxShadow = `
                    ${shadowX}px ${shadowY}px 60px rgba(255,255,255,0.3),
                    0 8px 32px rgba(0,0,0,0.12),
                    0 0 0 1px rgba(255,255,255,0.15) inset,
                    0 1px 0 rgba(255,255,255,0.4) inset
                  `;
                  
                  // 光晕层
                  const glowLayer = e.currentTarget.querySelector('.glow-layer') as HTMLElement;
                  if (glowLayer) {
                    glowLayer.style.background = `radial-gradient(circle 160px at ${xPercent}% ${yPercent}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.04) 80%, transparent 100%)`;
                    glowLayer.style.opacity = '1';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)';
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px rgba(0,0,0,0.12),
                    0 0 0 1px rgba(255,255,255,0.08) inset,
                    0 1px 0 rgba(255,255,255,0.25) inset
                  `;
                  
                  // 隐藏光晕层
                  const glowLayer = e.currentTarget.querySelector('.glow-layer') as HTMLElement;
                  if (glowLayer) {
                    glowLayer.style.opacity = '0';
                  }
                }}
              >
                {/* 跟随鼠标的光晕层 */}
                <div className="glow-layer absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ease-out opacity-0"></div>
                
                {/* 内部光晕效果 */}
                <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                
                {/* 简化的玻璃效果层 */}
                <div className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden">
                  {/* 顶部高光 - 收窄弧度 */}
                  <div className="absolute top-0 left-0 right-0 h-1/4 rounded-t-inherit" style={{
                    background: `linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 40%)`,
                  }}></div>
                  
                  {/* 散射效果 - 大幅收窄 */}
                  <div className="absolute inset-0 rounded-inherit" style={{
                    background: `
                      radial-gradient(ellipse 20% 30% at 25% 30%, rgba(255,255,255,0.04) 0%, transparent 50%),
                      radial-gradient(ellipse 18% 28% at 75% 70%, rgba(255,255,255,0.03) 0%, transparent 50%)
                    `,
                    filter: 'blur(0.5px)',
                    opacity: '0.2',
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`relative w-12 h-12 backdrop-blur-lg backdrop-saturate-[180%] rounded-md flex items-center justify-center mx-auto mb-4 text-white border border-white/10 overflow-hidden`}
                  style={{
                    backdropFilter: 'blur(8px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
                    boxShadow: `
                      0 4px 16px rgba(0,0,0,0.1),
                      0 0 0 1px rgba(255,255,255,0.1) inset,
                      0 1px 0 rgba(255,255,255,0.3) inset
                    `
                  }}>
                    {/* 图标内部光晕 */}
                    <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero
