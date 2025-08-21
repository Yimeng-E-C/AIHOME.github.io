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
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">AIHOME</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
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
                <div className={`w-16 h-16 ${item.bgColor} rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform ${item.iconColor}`}>
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
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
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 ${item.bgColor} rounded-md flex items-center justify-center mx-auto mb-4 ${item.iconColor} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
