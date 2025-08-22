'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Home, GraduationCap, Briefcase, ExternalLink, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrolled = currentScrollY > 100
      setScrolled(isScrolled)
      
      // 检查滚动方向
      const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 200
      const isScrollingUp = currentScrollY < lastScrollY
      
      // 向下滚动时收缩，向上滚动时展开
      if (isScrollingDown && !isHovering) {
        setIsCollapsed(true)
      } else if (isScrollingUp || isHovering) {
        setIsCollapsed(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isHovering])

  const navItems = [
    { name: '主页', href: '/', icon: Home },
    { name: '学术', href: '/academic', icon: GraduationCap },
    { name: '应用', href: '/applications', icon: Briefcase },
    { name: 'AI PK', href: '/links', icon: ExternalLink },
  ]

  return (
    <nav 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 w-full max-w-4xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 胶囊型导航栏 - iOS 液态玻璃效果 */}
      <div className={`relative backdrop-blur-lg backdrop-saturate-[180%] overflow-hidden navbar-container ${
        isCollapsed && !isHovering ? 'collapsed' : ''
      } ${
        scrolled 
          ? 'bg-white/20 border border-white/30 shadow-2xl shadow-black/10' 
          : 'bg-white/10 border border-white/20 shadow-2xl shadow-black/20'
      } ${isOpen ? 'rounded-2xl' : 'rounded-pill'}`}
      style={{
        backdropFilter: 'blur(8px) saturate(180%)',
        WebkitBackdropFilter: 'blur(8px) saturate(180%)',
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.01) 100%)',
        boxShadow: `
          0 8px 32px rgba(0,0,0,0.12),
          0 0 0 1px rgba(255,255,255,0.05) inset,
          0 1px 0 rgba(255,255,255,0.2) inset
        `
      }}>
        {/* 内部光晕效果 */}
        <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
        
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
        
        <div className={`relative flex items-center navbar-content ${
          isCollapsed && !isHovering ? 'collapsed' : 'expanded'
        }`}>
          {/* Logo部分 */}
          <Link href="/" className={`flex items-center navbar-logo ${
            isCollapsed && !isHovering ? 'collapsed' : 'expanded'
          }`}>
            <div className={`bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm navbar-logo-icon ${
              isCollapsed && !isHovering ? 'collapsed' : 'expanded'
            }`}>
              <span className="text-white font-bold">AI</span>
            </div>
            <span className={`text-xl font-bold navbar-logo-text ${
              isCollapsed && !isHovering ? 'collapsed' : 'expanded'
            } ${
              scrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}>AIHOME</span>
          </Link>

          {/* 桌面端导航 */}
          <div className={`hidden md:flex items-center navbar-nav ${
            isCollapsed && !isHovering ? 'collapsed' : 'expanded'
          }`}>
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center relative overflow-hidden group navbar-nav-item ${
                    isCollapsed && !isHovering ? 'collapsed' : 'expanded'
                  } ${
                    scrolled ? 'text-gray-800' : 'text-white/95'
                  }`}
                  style={{
                    background: isCollapsed && !isHovering 
                      ? scrolled 
                        ? 'rgba(59, 130, 246, 0.15)' 
                        : 'rgba(255, 255, 255, 0.20)'
                      : 'transparent',
                  }}
                >
                  <Icon size={isCollapsed && !isHovering ? 14 : 16} className="flex-shrink-0" />
                  <div className={`text-sm font-medium flex navbar-nav-item-text ${
                    isCollapsed && !isHovering ? 'collapsed' : 'expanded'
                  }`}>
                    {item.name.split('').map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="relative transition-all duration-300 ease-out"
                        onMouseEnter={(e) => {
                          // 光晕效果保持不变
                          const glowColor = scrolled 
                            ? 'rgba(59,130,246,' 
                            : 'rgba(255,255,255,';
                          
                          e.currentTarget.style.filter = `drop-shadow(0 0 8px ${glowColor}0.8))`;
                          e.currentTarget.style.textShadow = `
                            0 0 6px ${glowColor}0.8),
                            0 0 12px ${glowColor}0.6),
                            0 1px 2px rgba(0,0,0,0.3)
                          `;
                          
                          const siblings = e.currentTarget.parentElement?.children;
                          if (siblings) {
                            Array.from(siblings).forEach((sibling, siblingIndex) => {
                              const distance = Math.abs(siblingIndex - charIndex);
                              if (distance === 1) {
                                (sibling as HTMLElement).style.filter = `drop-shadow(0 0 6px ${glowColor}0.5))`;
                                (sibling as HTMLElement).style.textShadow = `
                                  0 0 4px ${glowColor}0.5),
                                  0 0 8px ${glowColor}0.3),
                                  0 1px 2px rgba(0,0,0,0.3)
                                `;
                              } else if (distance === 2) {
                                (sibling as HTMLElement).style.filter = `drop-shadow(0 0 3px ${glowColor}0.3))`;
                                (sibling as HTMLElement).style.textShadow = `
                                  0 0 2px ${glowColor}0.3),
                                  0 0 4px ${glowColor}0.2),
                                  0 1px 2px rgba(0,0,0,0.3)
                                `;
                              }
                            });
                          }
                        }}
                        onMouseLeave={(e) => {
                          const siblings = e.currentTarget.parentElement?.children;
                          if (siblings) {
                            Array.from(siblings).forEach((sibling) => {
                              (sibling as HTMLElement).style.filter = 'none';
                              (sibling as HTMLElement).style.textShadow = 'none';
                            });
                          }
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className={`md:hidden rounded-full flex items-center justify-center relative overflow-hidden group ${
              scrolled 
                ? 'text-gray-800 hover:text-gray-900' 
                : 'text-white hover:text-white'
            } w-10 h-10`}
            style={{
              background: isCollapsed && !isHovering 
                ? scrolled 
                  ? 'rgba(156, 163, 175, 0.1)' 
                  : 'rgba(255, 255, 255, 0.15)'
                : 'transparent',
              backdropFilter: 'blur(5px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = scrolled 
                ? 'rgba(156, 163, 175, 0.1)' 
                : 'rgba(255, 255, 255, 0.08)'
            }}
            onMouseLeave={(e) => {
              if (!(isCollapsed && !isHovering)) {
                e.currentTarget.style.background = 'transparent'
              }
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
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
                        ? 'text-gray-700' 
                        : 'text-white/90'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      scrolled 
                        ? 'bg-gray-100/60 group-hover:bg-gray-200/60' 
                        : 'bg-white/20 group-hover:bg-white/30'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <div className="font-medium flex">
                      {item.name.split('').map((char, index) => (
                        <span
                          key={index}
                          className="relative transition-all duration-300 ease-out"
                          onMouseEnter={(e) => {
                            // 根据scrolled状态选择光晕颜色
                            const glowColor = scrolled 
                              ? 'rgba(59,130,246,' // 蓝色光晕 - 当文字为黑色时
                              : 'rgba(255,255,255,'; // 白色光晕 - 当文字为白色时
                            
                            // 当前字符最强光晕
                            e.currentTarget.style.filter = `drop-shadow(0 0 8px ${glowColor}0.8))`;
                            e.currentTarget.style.textShadow = `
                              0 0 6px ${glowColor}0.8),
                              0 0 12px ${glowColor}0.6),
                              0 1px 2px rgba(0,0,0,0.3)
                            `;
                            
                            // 相邻字符递减光晕
                            const siblings = e.currentTarget.parentElement?.children;
                            if (siblings) {
                              Array.from(siblings).forEach((sibling, siblingIndex) => {
                                const distance = Math.abs(siblingIndex - index);
                                if (distance === 1) {
                                  // 相邻1个字符
                                  (sibling as HTMLElement).style.filter = `drop-shadow(0 0 6px ${glowColor}0.5))`;
                                  (sibling as HTMLElement).style.textShadow = `
                                    0 0 4px ${glowColor}0.5),
                                    0 0 8px ${glowColor}0.3),
                                    0 1px 2px rgba(0,0,0,0.3)
                                  `;
                                } else if (distance === 2) {
                                  // 相邻2个字符
                                  (sibling as HTMLElement).style.filter = `drop-shadow(0 0 3px ${glowColor}0.3))`;
                                  (sibling as HTMLElement).style.textShadow = `
                                    0 0 2px ${glowColor}0.3),
                                    0 0 4px ${glowColor}0.2),
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
                                (sibling as HTMLElement).style.textShadow = 'none';
                              });
                            }
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
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
