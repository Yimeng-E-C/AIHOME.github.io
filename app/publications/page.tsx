import TopBackground from '@/components/TopBackground';

export default function PublicationsPage() {
  const articles = [
    {
      title: "如何利用 AI 提升工作效率",
      author: "AI 专栏",
      date: "2025-08-20",
      summary: "本文介绍了几种利用 AI 工具提升日常工作效率的方法，包括自动化任务、智能推荐等。",
      link: "/articles/ai-productivity"
    },
    {
      title: "深度学习的未来发展趋势",
      author: "AI 专栏",
      date: "2025-08-15",
      summary: "深度学习技术在未来可能的发展方向，包括多模态学习、强化学习与自监督学习的结合。",
      link: "/articles/deep-learning-trends"
    },
    {
      title: "如何入门机器学习",
      author: "AI 专栏",
      date: "2025-08-10",
      summary: "为初学者提供了一些入门机器学习的建议，包括学习资源、实践项目与常见问题。",
      link: "/articles/ml-beginners"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBackground height="h-64" />
      <div className="relative z-10 py-8 pt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">公众号专栏</h1>
            <p className="text-lg text-gray-700">
              汇集最新的 AI 相关文章，涵盖技术趋势、应用案例与学习资源。
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">精选文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">作者: {article.author}</p>
                    <p className="text-sm text-gray-600 mb-2">日期: {article.date}</p>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700 mb-4 text-sm">{article.summary}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <a
                      href={article.link}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-pill hover:bg-blue-50 transition-colors"
                    >
                      阅读更多 →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
