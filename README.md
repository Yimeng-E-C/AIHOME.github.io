# AIHOME - AI信息聚合平台

一个专注于AI领域的信息聚合网站，提供学术研究、商业应用和实用工具的最新动态。

## 功能特色

- 🏠 **主页**: 展示最新AI动态的信息流
- 🎓 **学术**: 追踪AI学术界的研究方向和重要论文
- 💼 **应用**: 发现工业界的商用AI信息和产品动态
- 🔗 **快捷入口**: 精选AI工具和平台的导航页面

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **图标**: Lucide React
- **动画**: Framer Motion

## 快速开始

1. 安装依赖:
```bash
npm install
```

2. 启动开发服务器:
```bash
npm run dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
AIHOME/
├── app/                    # Next.js App Router
│   ├── academic/          # 学术页面
│   ├── applications/      # 应用页面
│   ├── links/            # 快捷入口页面
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 主页
├── components/           # React组件
│   ├── Navbar.tsx        # 导航栏
│   ├── Hero.tsx          # 首页英雄区
│   └── FeedSection.tsx   # 信息流组件
├── public/               # 静态资源
└── ...配置文件
```

## 部署

1. 构建项目:
```bash
npm run build
```

2. 启动生产服务器:
```bash
npm start
```

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 许可证

MIT License
