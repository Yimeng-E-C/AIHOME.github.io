const FeedSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "OpenAI发布GPT-5预览版本",
      summary: "OpenAI今日宣布GPT-5的早期预览版本，在推理能力和多模态理解方面有显著提升...",
      category: "学术",
      date: "2025-08-21",
      source: "OpenAI",
    },
    {
      id: 2,
      title: "Google推出新一代AI芯片TPU v6",
      summary: "Google发布了专为AI训练优化的TPU v6芯片，性能相比前代提升300%...",
      category: "应用",
      date: "2025-08-20",
      source: "Google",
    },
    {
      id: 3,
      title: "清华大学发布多模态大模型研究",
      summary: "清华大学AI实验室在Nature发表最新研究，提出了新的多模态融合架构...",
      category: "学术",
      date: "2025-08-19",
      source: "清华大学",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          最新AI动态
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-pill text-sm font-medium ${
                  item.category === '学术' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {item.category}
                </span>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-3 line-clamp-3">
                {item.summary}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  来源: {item.source}
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-pill hover:bg-blue-50 transition-colors">
                  阅读更多 →
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-pill hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            查看更多动态
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeedSection
