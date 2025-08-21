'use client'

interface TopBackgroundProps {
  height?: string
}

const TopBackground = ({ height = "h-96" }: TopBackgroundProps) => {
  return (
    <div className={`fixed top-0 left-0 right-0 ${height} overflow-hidden z-0`}>
      {/* 动态渐变背景 - 只覆盖顶部区域 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-purple-400 to-indigo-500 opacity-85"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-pink-200 to-blue-300 opacity-75 animate-pulse"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute top-20 left-20 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
    </div>
  )
}

export default TopBackground
