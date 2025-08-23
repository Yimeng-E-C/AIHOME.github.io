'use client'

import { useState, useEffect } from 'react'

interface TopBackgroundProps {
  height?: string
}

const TopBackground = ({ height = "h-96" }: TopBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 确保组件在客户端渲染后立即显示
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const getParallaxStyle = (factor: number) => ({
    transform: `translate(${mousePosition.x * factor}px, ${mousePosition.y * factor}px)`
  })

  // 在客户端渲染前显示基础背景，避免白屏
  const baseStyle = {
    zIndex: 0,
    opacity: isLoaded ? 1 : 0.8,
    transition: 'opacity 0.2s ease-in-out'
  }

  return (
    <div className={`fixed top-0 left-0 right-0 ${height} overflow-hidden`} style={baseStyle}>
      {/* 基础渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* 动态网格背景 - 增强对比度 + 鼠标交互 */}
      <div className="absolute inset-0 opacity-30" style={getParallaxStyle(0.01)}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.25) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255,255,255,0.25) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>
      
      {/* 漂浮的几何图形 - 进一步减轻阴影 + 鼠标交互 */}
      <div className="absolute top-20 left-1/4 w-32 h-32 border-8 border-blue-400/80 rounded-lg rotate-45 animate-float shadow-none" style={getParallaxStyle(0.02)}></div>
      <div className="absolute top-40 right-1/4 w-24 h-24 border-6 border-purple-400/75 rounded-full animate-float-delayed shadow-none" style={getParallaxStyle(-0.015)}></div>
      <div className="absolute bottom-32 left-1/3 w-28 h-28 border-6 border-indigo-400/80 rounded-xl rotate-12 animate-float-slow shadow-none" style={getParallaxStyle(0.025)}></div>
      
      {/* 新增更多几何图形 - 移除阴影 + 鼠标交互 */}
      <div className="absolute top-60 right-1/5 w-20 h-20 border-5 border-pink-400/70 rotate-30 animate-float-rotate shadow-none" style={getParallaxStyle(-0.02)}></div>
      <div className="absolute bottom-48 right-2/3 w-36 h-36 border-6 border-cyan-400/75 rounded-2xl rotate-75 animate-float-scale shadow-none" style={getParallaxStyle(0.03)}></div>
      <div className="absolute top-32 left-2/3 w-16 h-32 border-5 border-emerald-400/70 rounded-full animate-float-stretch shadow-none" style={getParallaxStyle(-0.025)}></div>
      
      {/* 新增的圆角矩形 - 测试显示 + 鼠标交互 */}
      <div 
        className="absolute top-72 left-1/4 w-40 h-24 rounded-2xl"
        style={{ 
          border: '6px solid orange',
          transform: `rotate(15deg) translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`,
          zIndex: 5
        }}
      ></div>
      <div 
        className="absolute top-80 right-1/4 w-32 h-20 rounded-xl"
        style={{ 
          border: '5px solid hotpink',
          transform: `rotate(-25deg) translate(${mousePosition.x * -0.035}px, ${mousePosition.y * -0.035}px)`,
          zIndex: 5
        }}
      ></div>
      
      {/* 发光粒子效果 - 移除阴影 + 鼠标交互 */}
      <div className="absolute top-16 left-20 w-4 h-4 bg-blue-300 rounded-full animate-pulse-glow shadow-none" style={getParallaxStyle(0.05)}></div>
      <div className="absolute top-32 right-32 w-3.5 h-3.5 bg-purple-300 rounded-full animate-pulse-glow animation-delay-1000 shadow-none" style={getParallaxStyle(-0.045)}></div>
      <div className="absolute bottom-24 left-1/2 w-5 h-5 bg-indigo-300 rounded-full animate-pulse-glow animation-delay-2000 shadow-none" style={getParallaxStyle(0.055)}></div>
      <div className="absolute top-60 left-3/4 w-3 h-3 bg-pink-300 rounded-full animate-pulse-glow animation-delay-3000 shadow-none" style={getParallaxStyle(-0.05)}></div>
      <div className="absolute bottom-40 right-1/5 w-4.5 h-4.5 bg-cyan-300 rounded-full animate-pulse-glow animation-delay-1500 shadow-none" style={getParallaxStyle(0.06)}></div>
      <div className="absolute top-48 left-1/5 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-pulse-glow animation-delay-2500 shadow-none" style={getParallaxStyle(-0.055)}></div>
      
      {/* 动态光束 - 移除阴影 */}
      <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-blue-300/50 to-transparent animate-beam shadow-none"></div>
      <div className="absolute top-0 right-1/3 w-2 h-full bg-gradient-to-b from-transparent via-purple-300/50 to-transparent animate-beam animation-delay-2000 shadow-none"></div>
      <div className="absolute top-0 left-3/5 w-1.5 h-full bg-gradient-to-b from-transparent via-pink-300/45 to-transparent animate-beam animation-delay-1000 shadow-none"></div>
      <div className="absolute top-0 right-1/5 w-2.5 h-full bg-gradient-to-b from-transparent via-indigo-300/55 to-transparent animate-beam animation-delay-3000 shadow-none"></div>
      
      {/* 旋转环形 - 移除阴影 + 鼠标交互 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={getParallaxStyle(0.015)}>
        <div className="w-96 h-96 border-4 border-white/20 rounded-full animate-spin-slow shadow-none"></div>
        <div className="absolute inset-8 border-3 border-white/25 rounded-full animate-spin-reverse shadow-none"></div>
        <div className="absolute inset-16 border-2 border-white/30 rounded-full animate-spin-slow shadow-none"></div>
      </div>
      
      {/* 顶部渐变遮罩，增强对比度 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
    </div>
  )
}

export default TopBackground
