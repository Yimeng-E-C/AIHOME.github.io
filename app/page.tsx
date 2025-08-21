import Hero from '@/components/Hero'
import FeedSection from '@/components/FeedSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 全屏动态渐变背景 - 覆盖整个视口包括顶栏 */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 via-pink-300 to-blue-400 opacity-80 animate-pulse"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* 内容区域 */}
      <div className="relative z-10">
        <Hero />
        {/* 多层自然过渡 - 从动态背景平滑过渡到白色 */}
        <div className="relative">
          <div className="h-16 bg-gradient-to-b from-transparent via-white/15 to-white/35"></div>
          <div className="h-12 bg-gradient-to-b from-white/35 via-white/60 to-white/85"></div>
          <div className="h-8 bg-gradient-to-b from-white/85 to-white"></div>
        </div>
      </div>
      
      {/* 最新AI动态区域保持白色背景 */}
      <div className="relative z-10 bg-white">
        <FeedSection />
      </div>
    </div>
  )
}
