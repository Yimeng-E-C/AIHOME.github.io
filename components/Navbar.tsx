'use client'

import Link from 'next/link'
import { Home, GraduationCap, Briefcase, ExternalLink, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

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
    { name: '公众号专栏', href: '/publications', icon: ExternalLink },
    { name: '学术', href: '/academic', icon: GraduationCap },
    { name: '应用', href: '/applications', icon: Briefcase },
    { name: 'AI PK', href: '/links', icon: ExternalLink },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-800 hover:text-blue-600">
              <span className="inline-block mr-2">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
