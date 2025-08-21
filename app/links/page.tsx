export default function LinksPage() {
  const linkCategories = [
    {
      title: "对话AI",
      links: [
        { name: "ChatGPT", url: "https://chat.openai.com", description: "OpenAI的对话AI助手" },
        { name: "Claude", url: "https://claude.ai", description: "Anthropic的AI助手" },
        { name: "Bard", url: "https://bard.google.com", description: "Google的对话AI" },
        { name: "文心一言", url: "https://yiyan.baidu.com", description: "百度的对话AI" },
        { name: "通义千问", url: "https://tongyi.aliyun.com", description: "阿里云的对话AI" }
      ]
    },
    {
      title: "图像生成",
      links: [
        { name: "DALL-E", url: "https://openai.com/dall-e-2", description: "OpenAI的图像生成AI" },
        { name: "Midjourney", url: "https://midjourney.com", description: "专业级AI绘画工具" },
        { name: "Stable Diffusion", url: "https://stability.ai", description: "开源的图像生成模型" },
        { name: "Adobe Firefly", url: "https://firefly.adobe.com", description: "Adobe的创意AI" }
      ]
    },
    {
      title: "代码助手",
      links: [
        { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI代码助手" },
        { name: "Cursor", url: "https://cursor.sh", description: "AI驱动的代码编辑器" },
        { name: "Replit", url: "https://replit.com", description: "在线编程平台" },
        { name: "CodeWhisperer", url: "https://aws.amazon.com/codewhisperer", description: "Amazon的代码助手" }
      ]
    },
    {
      title: "学术研究",
      links: [
        { name: "arXiv", url: "https://arxiv.org", description: "学术论文预印本库" },
        { name: "Papers With Code", url: "https://paperswithcode.com", description: "论文与代码对照" },
        { name: "Google Scholar", url: "https://scholar.google.com", description: "学术搜索引擎" },
        { name: "Semantic Scholar", url: "https://semanticscholar.org", description: "AI驱动的学术搜索" }
      ]
    },
    {
      title: "AI新闻",
      links: [
        { name: "AI News", url: "https://artificialintelligence-news.com", description: "AI行业新闻" },
        { name: "VentureBeat AI", url: "https://venturebeat.com/ai", description: "AI商业新闻" },
        { name: "机器之心", url: "https://jiqizhixin.com", description: "中文AI媒体" },
        { name: "量子位", url: "https://qbitai.com", description: "AI科技媒体" }
      ]
    },
    {
      title: "工具平台",
      links: [
        { name: "Hugging Face", url: "https://huggingface.co", description: "机器学习模型平台" },
        { name: "RunwayML", url: "https://runwayml.com", description: "创意AI工具套件" },
        { name: "Replicate", url: "https://replicate.com", description: "AI模型部署平台" },
        { name: "Colab", url: "https://colab.research.google.com", description: "Google的在线Jupyter环境" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">快捷入口</h1>
          <p className="text-lg text-gray-600">
            精选的AI工具、平台和资源链接，快速访问您需要的AI服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {linkCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-circle mr-3"></span>
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="border-l-4 border-blue-100 pl-4 hover:border-blue-300 transition-colors rounded-r-base">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group p-2 -m-2 rounded-base hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.name}
                        <svg className="inline-block w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 使用提示 */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">💡 使用提示</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h3 className="font-medium mb-2">🔍 搜索技巧:</h3>
              <ul className="space-y-1">
                <li>• 使用具体的关键词描述您的需求</li>
                <li>• 尝试不同的提示词来获得更好的结果</li>
                <li>• 关注模型的使用限制和定价</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">🛡️ 安全提醒:</h3>
              <ul className="space-y-1">
                <li>• 不要在AI工具中输入敏感信息</li>
                <li>• 注意检查生成内容的准确性</li>
                <li>• 遵守各平台的使用条款</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
