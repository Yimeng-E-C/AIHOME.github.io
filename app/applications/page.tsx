export default function ApplicationsPage() {
  const companies = [
    {
      name: "OpenAI",
      products: ["ChatGPT", "GPT-4", "DALL-E"],
      description: "领先的AI研究公司，专注于通用人工智能的安全开发",
      logo: "🤖",
      website: "https://openai.com"
    },
    {
      name: "Google AI",
      products: ["Bard", "LaMDA", "PaLM"],
      description: "Google的AI研究部门，开发各种AI产品和服务",
      logo: "🔍",
      website: "https://ai.google"
    },
    {
      name: "Microsoft AI",
      products: ["Copilot", "Azure AI", "Bing Chat"],
      description: "微软的AI平台，提供企业级AI解决方案",
      logo: "💼",
      website: "https://www.microsoft.com/ai"
    }
  ]

  const useCases = [
    {
      category: "内容创作",
      examples: ["文案写作", "图像生成", "视频制作", "音乐创作"],
      icon: "✍️"
    },
    {
      category: "客户服务", 
      examples: ["智能客服", "问答系统", "情感分析", "自动回复"],
      icon: "🎧"
    },
    {
      category: "数据分析",
      examples: ["预测分析", "模式识别", "异常检测", "报告生成"],
      icon: "📊"
    },
    {
      category: "软件开发",
      examples: ["代码生成", "bug检测", "测试自动化", "代码审查"],
      icon: "💻"
    }
  ]

  const news = [
    {
      title: "Microsoft宣布Copilot企业版新功能",
      date: "2025-08-20",
      summary: "新增的企业级安全功能和定制化选项将帮助更多企业采用AI助手..."
    },
    {
      title: "Adobe发布创意AI套件更新",
      date: "2025-08-19", 
      summary: "新版本包含更强大的图像编辑AI和视频生成功能..."
    },
    {
      title: "Salesforce推出Einstein GPT",
      date: "2025-08-18",
      summary: "针对CRM的专业AI助手，帮助销售团队提高效率..."
    }
  ]

  return (
    <div className="min-h-screen">
            {/* 动态渐变背景 - 只覆盖导航栏及以上部分 */}
      <div className="fixed top-0 left-0 right-0 h-64 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 via-pink-300 to-blue-400 opacity-80 animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-20 w-60 h-60 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* 柔和过渡层 - 覆盖在渐变背景上面，相同尺寸 */}
      <div className="fixed top-0 left-0 right-0 h-64 z-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-20 bg-gradient-to-b from-transparent via-white/10 to-white/25"></div>
          <div className="h-16 bg-gradient-to-b from-white/25 via-white/45 to-white/65"></div>
          <div className="h-12 bg-gradient-to-b from-white/65 via-white/80 to-white/95"></div>
          <div className="h-8 bg-gradient-to-b from-white/95 to-white"></div>
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="relative z-10 py-8 pt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">商业应用</h1>
            <p className="text-lg text-gray-700">
              探索AI在各行各业的商业应用，了解最新的产品动态和解决方案
            </p>
          </div>
        </div>
      </div>
      
      {/* 主内容区域 */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-8">

        {/* 主要公司 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">主要AI公司</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{company.logo}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                </div>
                <p className="text-gray-700 mb-4">{company.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">主要产品:</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.products.map((product, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-pill text-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-pill hover:bg-blue-50 transition-colors"
                >
                  访问官网 →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 应用场景 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">应用场景</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-center mb-4">
                  <span className="text-4xl">{useCase.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">{useCase.category}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-circle mr-2"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 行业动态 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">行业动态</h2>
          <div className="space-y-4">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <p className="text-gray-700">{item.summary}</p>
                <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-pill hover:bg-blue-50 transition-colors">
                  阅读全文 →
                </button>
              </div>
            ))}
          </div>
        </section>
        </div>
      </div>
    </div>
  )
}
