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
    <section className="pt-28 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="text-white">AIHOME</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow">
            您的AI信息聚合平台，追踪前沿学术研究，发现商业应用，探索AI世界
          </p>
          
          {/* 移动端：横向排列的图标 */}
          <div className="flex justify-center items-center gap-8 md:hidden mb-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex flex-col items-center group"
              >
                <div className={`relative w-16 h-16 backdrop-blur-lg backdrop-saturate-[180%] rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-all text-white border border-white/20 shadow-2xl overflow-hidden`}
                style={{
                  backdropFilter: 'blur(8px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
                  boxShadow: `
                    0 8px 32px rgba(0,0,0,0.12),
                    0 0 0 1px rgba(255,255,255,0.05) inset,
                    0 1px 0 rgba(255,255,255,0.2) inset
                  `
                }}>
                  {/* 内部光晕效果 */}
                  <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* 简化的玻璃效果层 */}
                  <div className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden">
                    {/* 顶部高光 */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-inherit" style={{
                      background: `linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 40%)`,
                    }}></div>
                    
                    {/* 散射效果 - 简化版 */}
                    <div className="absolute inset-0 rounded-inherit" style={{
                      background: `
                        radial-gradient(ellipse 30% 40% at 30% 35%, rgba(255,255,255,0.1) 0%, transparent 60%),
                        radial-gradient(ellipse 25% 35% at 70% 65%, rgba(255,255,255,0.08) 0%, transparent 60%)
                      `,
                      filter: 'blur(0.8px)',
                      opacity: '0.4',
                    }}></div>
                  </div>
                  
                  {/* 液态玻璃扭曲折射效果层 */}
                  <div className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden">
                    {/* 弧面反射高光 */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-inherit" style={{
                      background: `
                        radial-gradient(ellipse 70% 40% at 50% -5%, rgba(255,255,255,0.4) 0%, transparent 70%),
                        linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 40%)
                      `,
                      transform: 'perspective(200px) rotateX(20deg) scaleY(0.5)',
                      transformOrigin: 'center top',
                    }}></div>
                    
                    {/* 折射扭曲线条 - 适配小尺寸 */}
                    <div className="absolute inset-0 rounded-inherit" style={{
                      background: `
                        linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.12) 48%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.12) 52%, transparent 55%),
                        linear-gradient(-45deg, transparent 65%, rgba(255,255,255,0.08) 68%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0.08) 72%, transparent 75%)
                      `,
                      filter: 'blur(0.2px)',
                      opacity: '0.7',
                    }}></div>
                    
                    {/* 液态散射效果 - 简化版 */}
                    <div className="absolute inset-0 rounded-inherit" style={{
                      background: `
                        radial-gradient(ellipse 30% 40% at 30% 35%, rgba(255,255,255,0.15) 0%, transparent 60%),
                        radial-gradient(ellipse 25% 35% at 70% 65%, rgba(255,255,255,0.1) 0%, transparent 60%)
                      `,
                      filter: 'blur(0.8px)',
                      opacity: '0.5',
                    }}></div>
                  </div>
                  <div className="relative z-10">
                    {item.icon}
                  </div>
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white drop-shadow">
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
                className="relative backdrop-blur-lg backdrop-saturate-[180%] rounded-xl p-6 shadow-2xl hover:shadow-2xl transition-all cursor-pointer group border border-white/20 overflow-hidden"
                style={{
                  backdropFilter: 'blur(8px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
                  boxShadow: `
                    0 8px 32px rgba(0,0,0,0.12),
                    0 0 0 1px rgba(255,255,255,0.05) inset,
                    0 1px 0 rgba(255,255,255,0.2) inset
                  `
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 100%)'
                  e.currentTarget.style.backdropFilter = 'blur(6px) saturate(180%)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)'
                  e.currentTarget.style.backdropFilter = 'blur(8px) saturate(180%)'
                }}
              >
                {/* 内部光晕效果 */}
                <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                
                {/* 简化的玻璃效果层 */}
                <div className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden">
                  {/* 顶部高光 */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-inherit" style={{
                    background: `linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                  }}></div>
                  
                  {/* 散射效果 */}
                  <div className="absolute inset-0 rounded-inherit" style={{
                    background: `
                      radial-gradient(ellipse 40% 60% at 25% 30%, rgba(255,255,255,0.08) 0%, transparent 65%),
                      radial-gradient(ellipse 35% 55% at 75% 70%, rgba(255,255,255,0.06) 0%, transparent 65%)
                    `,
                    filter: 'blur(1px)',
                    opacity: '0.3',
                  }}></div>
                </div>
                
                {/* 悬停光晕效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className={`relative w-12 h-12 backdrop-blur-lg backdrop-saturate-[180%] rounded-md flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform border border-white/10 overflow-hidden`}
                  style={{
                    backdropFilter: 'blur(8px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)',
                    boxShadow: `
                      0 4px 16px rgba(0,0,0,0.1),
                      0 0 0 1px rgba(255,255,255,0.1) inset,
                      0 1px 0 rgba(255,255,255,0.3) inset
                    `
                  }}>
                    {/* 图标内部光晕 */}
                    <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
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
  )
}

export default Hero
