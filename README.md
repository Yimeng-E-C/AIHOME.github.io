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
- **部署**: GitHub Pages (静态导出)

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
├── .github/workflows/    # GitHub Actions
├── out/                  # 构建输出目录
└── ...配置文件
```

## 构建和部署

### 本地构建
```bash
# 构建静态网站
npm run build

# 预览构建结果
npm start
```

### GitHub Pages 自动部署

本项目配置了 GitHub Actions 自动部署到 GitHub Pages：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建 Next.js 应用
3. 生成静态文件并部署到 GitHub Pages

#### 手动部署设置

如果需要手动设置 GitHub Pages：

1. 在 GitHub 仓库设置中启用 Pages
2. 选择 "GitHub Actions" 作为源
3. 推送代码，Actions 将自动运行

### 部署要求

- ✅ 静态导出配置 (`output: 'export'`)
- ✅ 禁用 Jekyll (`.nojekyll` 文件)
- ✅ GitHub Actions 工作流
- ✅ 图像优化禁用 (`unoptimized: true`)

## 设计特色

- 📱 **响应式设计**: 完美适配移动端和桌面端
- 🎨 **iOS风格圆角**: 统一的设计语言
- ⚡ **性能优化**: 静态生成，快速加载
- 🎯 **用户体验**: 直观的导航和交互

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 许可证

MIT License
