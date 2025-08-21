'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Home, GraduationCap, Briefcase, ExternalLink } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: '主页', href: '/', icon: Home },
    { name: '学术', href: '/academic', icon: GraduationCap },
    { name: '应用', href: '/applications', icon: Briefcase },
    { name: '快捷入口', href: '/links', icon: ExternalLink },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold gradient-text">AIHOME</span>
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 移动端菜单 */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 py-3 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
