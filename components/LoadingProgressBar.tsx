'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface LoadingProgressBarProps {
  onProgressChange?: (progress: number, isVisible: boolean) => void
}

const LoadingProgressBar = ({ onProgressChange }: LoadingProgressBarProps) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // 平滑消失动画函数
  const startDisappearAnimation = () => {
    // 平滑消失动画：从左至右消失，1秒内从100到0
    const startTime = Date.now()
    const duration = 1000 // 1秒
    
    const updateDisappear = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // 使用缓动函数 (easeInCubic) 让消失更自然
      const easeInCubic = (t: number) => t * t * t
      const smoothProgress = (1 - easeInCubic(progress)) * 100
      
      setProgress(smoothProgress)
      onProgressChange?.(smoothProgress, true)
      
      if (progress < 1) {
        requestAnimationFrame(updateDisappear)
      } else {
        setProgress(0)
        setIsVisible(false)
        onProgressChange?.(0, false)
      }
    }
    
    requestAnimationFrame(updateDisappear)
  }

  useEffect(() => {
    // 监听链接点击事件
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href]')
      if (link && link.getAttribute('href')?.startsWith('/')) {
        startProgressAnimation()
      }
    }

    const startProgressAnimation = () => {
      setIsVisible(true)
      setProgress(0)
      onProgressChange?.(0, true)
      
      // 平滑进度条动画：使用缓动函数，2.5秒内从0到100
      const startTime = Date.now()
      const duration = 2500 // 2.5秒
      
      const updateProgress = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // 使用缓动函数 (easeOutCubic) 让动画更自然
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
        const smoothProgress = easeOutCubic(progress) * 100
        
        setProgress(smoothProgress)
        onProgressChange?.(smoothProgress, true)
        
        if (progress < 1) {
          requestAnimationFrame(updateProgress)
        } else {
          // 到达100%后，等待1秒再开始消失
          setTimeout(() => {
            startDisappearAnimation()
          }, 1000)
        }
      }
      
      requestAnimationFrame(updateProgress)
    }

    const startDisappearAnimation = () => {
      // 平滑消失动画：从左至右消失，1秒内从100到0
      const startTime = Date.now()
      const duration = 1000 // 1秒
      
      const updateDisappear = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // 使用缓动函数 (easeInCubic) 让消失更自然
        const easeInCubic = (t: number) => t * t * t
        const smoothProgress = (1 - easeInCubic(progress)) * 100
        
        setProgress(smoothProgress)
        onProgressChange?.(smoothProgress, true)
        
        if (progress < 1) {
          requestAnimationFrame(updateDisappear)
        } else {
          setProgress(0)
          setIsVisible(false)
          onProgressChange?.(0, false)
        }
      }
      
      requestAnimationFrame(updateDisappear)
    }

    // 添加事件监听器
    document.addEventListener('click', handleLinkClick)

    return () => {
      document.removeEventListener('click', handleLinkClick)
    }
  }, [onProgressChange])

  // 当路径改变时立即完成进度条
  useEffect(() => {
    if (isVisible) {
      setProgress(100)
      onProgressChange?.(100, true)
      setTimeout(() => {
        startDisappearAnimation()
      }, 1000)
    }
  }, [pathname])

  return null
}

export default LoadingProgressBar
