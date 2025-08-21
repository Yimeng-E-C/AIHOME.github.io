'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Home, GraduationCap, Briefcase, ExternalLink, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: '主页', href: '/', icon: Home },
    { name: '学术', href: '/academic', icon: GraduationCap },
    { name: '应用', href: '/applications', icon: Briefcase },
    { name: '快捷入口', href: '/links', icon: ExternalLink },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      {/* 胶囊型导航栏 - iOS 液态玻璃效果 */}
      <div className={`relative backdrop-blur-lg backdrop-saturate-[180%] transition-all duration-500 ease-out overflow-hidden ${
        scrolled 
          ? 'bg-white/20 border border-white/30 shadow-2xl shadow-black/10' 
          : 'bg-white/10 border border-white/20 shadow-2xl shadow-black/20'
      } ${isOpen ? 'rounded-2xl' : 'rounded-pill'}`}
      style={{
        backdropFilter: 'blur(8px) saturate(180%)',
        WebkitBackdropFilter: 'blur(8px) saturate(180%)',
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
        boxShadow: `
          0 8px 32px rgba(0,0,0,0.12),
          0 0 0 1px rgba(255,255,255,0.05) inset,
          0 1px 0 rgba(255,255,255,0.2) inset
        `
      }}>
        {/* 内部光晕效果 */}
        <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
        
        {/* 液态玻璃扭曲折射效果层 */}
                  {/* 简化的玻璃效果层 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* 顶部高光 */}
            <div className="absolute top-0 left-0 right-0 h-1/3" style={{
              background: `linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            }}></div>
            
            {/* 散射效果 */}
            <div className="absolute inset-0" style={{
              background: `
                radial-gradient(ellipse 40% 60% at 25% 30%, rgba(255,255,255,0.08) 0%, transparent 65%),
                radial-gradient(ellipse 35% 55% at 75% 70%, rgba(255,255,255,0.06) 0%, transparent 65%)
              `,
              filter: 'blur(1px)',
              opacity: '0.3',
            }}></div>
          </div>
        
        <div className="relative flex justify-between items-center h-14 px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-circle flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}>AIHOME</span>
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 transition-all duration-200 px-4 py-2.5 rounded-pill relative overflow-hidden group ${
                    scrolled 
                      ? 'text-gray-800 hover:text-blue-600' 
                      : 'text-white/95 hover:text-white'
                  }`}
                  style={{
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = scrolled 
                      ? 'rgba(59, 130, 246, 0.1)' 
                      : 'rgba(255, 255, 255, 0.15)'
                    e.currentTarget.style.backdropFilter = 'blur(6px) saturate(180%)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.backdropFilter = 'none'
                  }}
                >
                  {/* 悬停光晕效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                  <Icon size={16} className="relative z-10" />
                  <span className="text-sm font-medium relative z-10">{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className={`md:hidden w-10 h-10 rounded-circle transition-all duration-200 flex items-center justify-center relative overflow-hidden group ${
              scrolled 
                ? 'text-gray-800 hover:text-gray-900' 
                : 'text-white hover:text-white'
            }`}
            style={{
              background: 'transparent',
              backdropFilter: 'blur(5px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = scrolled 
                ? 'rgba(156, 163, 175, 0.1)' 
                : 'rgba(255, 255, 255, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
            {isOpen ? <X size={20} className="relative z-10" /> : <Menu size={20} className="relative z-10" />}
          </button>
        </div>

        {/* 移动端菜单 */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`border-t px-4 py-4 backdrop-blur-md ${
            scrolled 
              ? 'border-white/30 bg-white/30' 
              : 'border-white/20 bg-white/10'
          }`}
          style={{
            backdropFilter: 'blur(6px) saturate(180%)',
          }}>
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-200 group ${
                      scrolled 
                        ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/60' 
                        : 'text-white/90 hover:text-white hover:bg-white/20'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`w-8 h-8 rounded-circle flex items-center justify-center transition-colors ${
                      scrolled 
                        ? 'bg-gray-100/60 group-hover:bg-gray-200/60' 
                        : 'bg-white/20 group-hover:bg-white/30'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
