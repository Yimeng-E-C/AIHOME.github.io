/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '4px',      // 小元素
        'sm': '8px',      // 小按钮
        'base': '12px',   // 标准按钮
        'md': '16px',     // 中等卡片
        'lg': '20px',     // 大卡片
        'xl': '24px',     // 超大卡片
        '2xl': '28px',    // 巨大卡片
        '3xl': '32px',    // 特大卡片
        'pill': '9999px', // 胶囊按钮
        'circle': '50%',  // 圆形
      },
    },
  },
  plugins: [],
}
