import Hero from '@/components/Hero'
import FeedSection from '@/components/FeedSection'
import TopBackground from '@/components/TopBackground'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* 使用新的背景组件 */}
      <TopBackground height="h-screen" />
      
      {/* 白色背景层 - 在动态壁纸后面一层 */}
      <div className="fixed inset-0 bg-white" style={{ zIndex: -1 }}></div>
      
      {/* 柔和过渡层 - 确保背景在页面切换时正常显示 */}
      <div className="fixed top-0 left-0 right-0 h-screen" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-20 bg-gradient-to-b from-transparent via-white/10 to-white/25"></div>
          <div className="h-16 bg-gradient-to-b from-white/25 via-white/45 to-white/65"></div>
          <div className="h-12 bg-gradient-to-b from-white/65 via-white/80 to-white/95"></div>
          <div className="h-8 bg-gradient-to-b from-white/95 to-white"></div>
        </div>
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
