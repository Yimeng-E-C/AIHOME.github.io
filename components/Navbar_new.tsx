'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { GraduationCap, Briefcase, ExternalLink, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // 性能优化相关的 refs 和状态
  const navRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const isAnimatingRef = useRef(false)
  const lastMousePositionRef = useRef<{x: number, y: number} | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 优化的鼠标移动处理函数，使用防抖和 requestAnimationFrame
  const updateMouseEffects = useCallback((xPercent: number, yPercent: number, element: HTMLElement) => {
    if (isAnimatingRef.current) return
    
    isAnimatingRef.current = true
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      const centerX = 50
      const centerY = 50
      
      // 光晕效果 - 减少计算复杂度
      element.style.background = scrolled 
        ? `radial-gradient(circle 200px at ${xPercent}% ${yPercent}%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 40%, rgba(255,255,255,0.08) 70%, transparent 85%), linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)`
        : `radial-gradient(circle 200px at ${xPercent}% ${yPercent}%, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0.22) 40%, rgba(255,255,255,0.06) 70%, transparent 85%), linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.02) 100%)`

      // 简化的阴影效果
      const shadowX = (xPercent - centerX) * 0.3
      const shadowY = (yPercent - centerY) * 0.3
      element.style.boxShadow = scrolled 
        ? `${shadowX}px ${shadowY}px 30px rgba(255,255,255,0.13), inset 0 1px 3px rgba(255,255,255,0.2), 0 8px 25px rgba(0,0,0,0.1)`
        : `${shadowX}px ${shadowY}px 30px rgba(255,255,255,0.13), inset 0 1px 3px rgba(255,255,255,0.15), 0 8px 25px rgba(0,0,0,0.15)`

      // 简化的3D变换
      const tiltX = (yPercent - 50) * 0.03
      const tiltY = (xPercent - 50) * -0.03
      element.style.transform = `translateZ(0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      element.style.filter = `drop-shadow(0 4px 8px rgba(0,0,0,0.1)) drop-shadow(0 0 20px rgba(255,255,255,0.1)) brightness(1.015)`
      
      isAnimatingRef.current = false
    })
  }, [scrolled])

  // 重置效果函数
  const resetMouseEffects = useCallback((element: HTMLElement) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    
    element.style.background = scrolled 
      ? 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)'
      : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.02) 100%)'
    
    element.style.boxShadow = scrolled 
      ? `inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.1), 0 0 15px rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.12)`
      : `inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.08), 0 0 15px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.2)`
    
    element.style.transform = 'translateZ(0)'
    element.style.filter = `drop-shadow(0 4px 8px rgba(0,0,0,0.1)) drop-shadow(0 0 20px rgba(255,255,255,0.1))`
    
    lastMousePositionRef.current = null
    isAnimatingRef.current = false
  }, [scrolled])

  // 清理函数，防止内存泄漏
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const navLinks = [
    { name: '学术前沿', href: '/academic', icon: GraduationCap },
    { name: '商业应用', href: '/applications', icon: Briefcase },
    { name: '快捷工具', href: '/links', icon: ExternalLink },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 w-full max-w-4xl">
      {/* 胶囊型导航栏 - iOS 液态玻璃效果 */}
      <div 
        className={`relative backdrop-blur-lg backdrop-saturate-[180%] transition-all duration-300 cursor-pointer ${
          scrolled 
            ? 'bg-white/20 shadow-2xl shadow-black/10' 
            : 'bg-white/10 shadow-2xl shadow-black/20'
        } ${isOpen ? 'rounded-2xl' : 'rounded-pill'}`}
        style={{
          backdropFilter: 'blur(8px) saturate(180%)',
          WebkitBackdropFilter: 'blur(8px) saturate(180%)',
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.02) 100%)',
          boxShadow: scrolled 
            ? `
              inset 0 2px 4px rgba(255,255,255,0.25),
              inset 0 -2px 4px rgba(0,0,0,0.1),
              inset 0 0 0 1px rgba(255,255,255,0.2),
              0 0 15px rgba(255,255,255,0.12),
              0 8px 32px rgba(0,0,0,0.12),
              0 20px 60px rgba(0,0,0,0.08)
            `
            : `
              inset 0 2px 4px rgba(255,255,255,0.2),
              inset 0 -2px 4px rgba(0,0,0,0.08),
              inset 0 0 0 1px rgba(255,255,255,0.15),
              0 0 15px rgba(255,255,255,0.08),
              0 8px 32px rgba(0,0,0,0.2),
              0 20px 60px rgba(0,0,0,0.15)
            `,
          overflow: 'visible', // 确保进度条光效可见
          transform: 'translateZ(0)', // 启用硬件加速
          filter: `
            drop-shadow(0 4px 8px rgba(0,0,0,0.1))
            drop-shadow(0 0 20px rgba(255,255,255,0.1))
          `,
          transition: 'box-shadow 0.3s ease-out, background 0.3s ease-out',
          willChange: 'transform, filter' // 提示浏览器进行硬件加速优化
        }}
        ref={navRef}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const xPercent = (x / rect.width) * 100
          const yPercent = (y / rect.height) * 100
          
          // 防抖处理 - 只有当鼠标位置变化超过阈值时才更新
          const lastPos = lastMousePositionRef.current
          if (lastPos && Math.abs(lastPos.x - xPercent) < 2 && Math.abs(lastPos.y - yPercent) < 2) {
            return
          }
          
          lastMousePositionRef.current = { x: xPercent, y: yPercent }
          updateMouseEffects(xPercent, yPercent, e.currentTarget)
        }}
        onMouseLeave={(e) => {
          resetMouseEffects(e.currentTarget)
        }}
      >
        {/* 光晕层 */}
        <div className="navbar-glow-layer absolute inset-0 rounded-inherit transition-opacity duration-300 opacity-0 pointer-events-none" style={{
          borderRadius: isOpen ? '1rem' : '9999px'
        }}></div>

        {/* 液态玻璃扭曲折射效果层 */}
        <div className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden" style={{
          borderRadius: isOpen ? '1rem' : '9999px'
        }}>
          {/* 弧面反射高光 */}
          <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-inherit" style={{
            background: `
              radial-gradient(ellipse 60% 30% at 50% -10%, rgba(255,255,255,0.15) 0%, transparent 50%),
              linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 25%)
            `,
            transform: 'perspective(100px) rotateX(10deg) scaleY(0.4)',
            transformOrigin: 'center top',
            borderRadius: isOpen ? '1rem 1rem 0 0' : '9999px 9999px 0 0'
          }}></div>
          
          {/* 折射扭曲线条 */}
          <div className="absolute inset-0 rounded-inherit" style={{
            background: `
              linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.04) 49.5%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 50.5%, transparent 52%),
              linear-gradient(-45deg, transparent 68%, rgba(255,255,255,0.03) 69.5%, rgba(255,255,255,0.06) 70%, rgba(255,255,255,0.03) 70.5%, transparent 72%)
            `,
            filter: 'blur(0.1px)',
            opacity: '0.3',
            borderRadius: isOpen ? '1rem' : '9999px'
          }}></div>
          
          {/* 液态散射效果 */}
          <div className="absolute inset-0 rounded-inherit" style={{
            background: `
              radial-gradient(ellipse 20% 25% at 25% 30%, rgba(255,255,255,0.06) 0%, transparent 40%),
              radial-gradient(ellipse 15% 20% at 75% 70%, rgba(255,255,255,0.04) 0%, transparent 40%)
            `,
            filter: 'blur(0.2px)',
            opacity: '0.25',
            borderRadius: isOpen ? '1rem' : '9999px'
          }}></div>
        </div>

        {/* 主要导航内容 */}
        <div className="relative z-10 flex items-center justify-between px-6 py-4">
          {/* LOGO / AI HOME 按钮 - 精确文字光晕 */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 transition-all duration-200 hover:scale-105 group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm relative overflow-hidden">
              {/* 内部光晕效果 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
              <span className="text-white font-bold text-sm relative z-10">AI</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 relative ${
              scrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}>
              {'AIHOME'.split('').map((char, index) => (
                <span
                  key={index}
                  className="relative transition-all duration-200 hover:drop-shadow-lg"
                  style={{
                    textShadow: '0 0 4px rgba(255,255,255,0.4), 0 0 8px rgba(255,255,255,0.2)',
                  }}
                  onMouseEnter={(e) => {
                    const glowColor = scrolled 
                      ? 'rgba(59,130,246,' 
                      : 'rgba(255,255,255,';
                    
                    e.currentTarget.style.textShadow = `
                      0 0 8px ${glowColor}0.9),
                      0 0 16px ${glowColor}0.6),
                      0 0 24px ${glowColor}0.3)
                    `;
                    e.currentTarget.style.filter = `drop-shadow(0 0 6px ${glowColor}0.8))`;
                    
                    // 相邻字符光晕
                    const siblings = e.currentTarget.parentElement?.children;
                    if (siblings) {
                      Array.from(siblings).forEach((sibling, siblingIndex) => {
                        const distance = Math.abs(siblingIndex - index);
                        if (distance === 1) {
                          (sibling as HTMLElement).style.textShadow = `
                            0 0 6px ${glowColor}0.6),
                            0 0 12px ${glowColor}0.4)
                          `;
                          (sibling as HTMLElement).style.filter = `drop-shadow(0 0 4px ${glowColor}0.6))`;
                        } else if (distance === 2) {
                          (sibling as HTMLElement).style.textShadow = `
                            0 0 4px ${glowColor}0.4),
                            0 0 8px ${glowColor}0.2)
                          `;
                          (sibling as HTMLElement).style.filter = `drop-shadow(0 0 3px ${glowColor}0.4))`;
                        }
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    const siblings = e.currentTarget.parentElement?.children;
                    if (siblings) {
                      Array.from(siblings).forEach((sibling) => {
                        (sibling as HTMLElement).style.textShadow = '0 0 4px rgba(255,255,255,0.4), 0 0 8px rgba(255,255,255,0.2)';
                        (sibling as HTMLElement).style.filter = 'none';
                      });
                    }
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </Link>

          {/* 桌面端导航 - 精确文字光晕 */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 transition-all duration-200 px-4 py-2.5 relative group ${
                    scrolled 
                      ? 'text-gray-800 hover:text-gray-900'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <Icon 
                    size={16} 
                    className="relative z-10" 
                    style={{
                      filter: isActive ? (scrolled 
                        ? 'drop-shadow(0 0 6px rgba(59,130,246,0.8))'
                        : 'drop-shadow(0 0 6px rgba(255,255,255,0.8))'
                      ) : 'none',
                      color: isActive ? (scrolled ? '#3b82f6' : '#ffffff') : 'inherit'
                    }}
                  />
                  <div className="text-sm font-medium relative z-10 flex">
                    {item.name.split('').map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="relative transition-all duration-300 ease-out"
                        style={{
                          // 当前页面常亮光晕
                          textShadow: isActive ? (scrolled 
                            ? '0 0 8px rgba(59,130,246,0.8), 0 0 16px rgba(59,130,246,0.4), 0 0 24px rgba(59,130,246,0.2)'
                            : '0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.4), 0 0 24px rgba(255,255,255,0.2)'
                          ) : 'none',
                          filter: isActive ? (scrolled 
                            ? 'drop-shadow(0 0 4px rgba(59,130,246,0.8))'
                            : 'drop-shadow(0 0 4px rgba(255,255,255,0.8))'
                          ) : 'none',
                          color: isActive ? (scrolled ? '#3b82f6' : '#ffffff') : 'inherit'
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) { // 只有非当前页面才有鼠标交互光晕
                            const glowColor = scrolled 
                              ? 'rgba(59,130,246,' 
                              : 'rgba(255,255,255,';
                            
                            e.currentTarget.style.textShadow = `
                              0 0 8px ${glowColor}0.9),
                              0 0 16px ${glowColor}0.6),
                              0 0 24px ${glowColor}0.3)
                            `;
                            e.currentTarget.style.filter = `drop-shadow(0 0 6px ${glowColor}0.8))`;
                            
                            // 相邻字符递减光晕
                            const siblings = e.currentTarget.parentElement?.children;
                            if (siblings) {
                              Array.from(siblings).forEach((sibling, siblingIndex) => {
                                const distance = Math.abs(siblingIndex - charIndex);
                                if (distance === 1) {
                                  (sibling as HTMLElement).style.textShadow = `
                                    0 0 6px ${glowColor}0.6),
                                    0 0 12px ${glowColor}0.4)
                                  `;
                                  (sibling as HTMLElement).style.filter = `drop-shadow(0 0 4px ${glowColor}0.6))`;
                                } else if (distance === 2) {
                                  (sibling as HTMLElement).style.textShadow = `
                                    0 0 4px ${glowColor}0.4),
                                    0 0 8px ${glowColor}0.2)
                                  `;
                                  (sibling as HTMLElement).style.filter = `drop-shadow(0 0 3px ${glowColor}0.4))`;
                                }
                              });
                            }
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) { // 只重置非当前页面的效果
                            const siblings = e.currentTarget.parentElement?.children;
                            if (siblings) {
                              Array.from(siblings).forEach((sibling) => {
                                (sibling as HTMLElement).style.textShadow = 'none';
                                (sibling as HTMLElement).style.filter = 'none';
                              });
                            }
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
            className={`md:hidden w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center relative overflow-hidden group ${
              scrolled 
                ? 'text-gray-800 hover:text-gray-900' 
                : 'text-white hover:text-white'
            }`}
            style={{
              background: 'transparent',
              backdropFilter: 'blur(5px)',
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            {isOpen ? <X size={20} className="relative z-10" /> : <Menu size={20} className="relative z-10" />}
          </button>
        </div>

        {/* 移动端菜单 - 精确文字光晕 */}
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
              {navLinks.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 py-3 px-4 transition-all duration-200 group ${
                      scrolled 
                        ? (isActive 
                            ? 'bg-blue-500/20 text-blue-600' 
                            : 'text-gray-700'
                          )
                        : (isActive 
                            ? 'bg-white/25 text-white' 
                            : 'text-white/90'
                          )
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      scrolled 
                        ? 'bg-gray-100/60' 
                        : 'bg-white/20'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <div className="font-medium flex">
                      {item.name.split('').map((char, index) => (
                        <span
                          key={index}
                          className="relative transition-all duration-300 ease-out"
                          onMouseEnter={(e) => {
                            const glowColor = scrolled 
                              ? 'rgba(59,130,246,' 
                              : 'rgba(255,255,255,';
                            
                            e.currentTarget.style.textShadow = `
                              0 0 8px ${glowColor}0.9),
                              0 0 16px ${glowColor}0.6),
                              0 0 24px ${glowColor}0.3)
                            `;
                            e.currentTarget.style.filter = `drop-shadow(0 0 6px ${glowColor}0.8))`;
                            
                            // 相邻字符递减光晕
                            const siblings = e.currentTarget.parentElement?.children;
                            if (siblings) {
                              Array.from(siblings).forEach((sibling, siblingIndex) => {
                                const distance = Math.abs(siblingIndex - index);
                                if (distance === 1) {
                                  (sibling as HTMLElement).style.textShadow = `
                                    0 0 6px ${glowColor}0.6),
                                    0 0 12px ${glowColor}0.4)
                                  `;
                                  (sibling as HTMLElement).style.filter = `drop-shadow(0 0 4px ${glowColor}0.6))`;
                                } else if (distance === 2) {
                                  (sibling as HTMLElement).style.textShadow = `
                                    0 0 4px ${glowColor}0.4),
                                    0 0 8px ${glowColor}0.2)
                                  `;
                                  (sibling as HTMLElement).style.filter = `drop-shadow(0 0 3px ${glowColor}0.4))`;
                                }
                              });
                            }
                          }}
                          onMouseLeave={(e) => {
                            const siblings = e.currentTarget.parentElement?.children;
                            if (siblings) {
                              Array.from(siblings).forEach((sibling) => {
                                (sibling as HTMLElement).style.textShadow = 'none';
                                (sibling as HTMLElement).style.filter = 'none';
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
