import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar_new'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIHOME - AI信息聚合平台',
  description: '专注于AI领域的信息聚合，涵盖学术研究、工业应用和实用工具',
  keywords: 'AI, 人工智能, 机器学习, 深度学习, 学术, 应用',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-white min-h-screen`}>
        <Navbar />
        <main className="min-h-screen pt-20 bg-white">
          {children}
        </main>
      </body>
    </html>
  )
}
