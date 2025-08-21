import TopBackground from '@/components/TopBackground'

export default function AcademicPage() {
  const papers = [
    {
      title: "Attention Is All You Need",
      authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, \nLukasz Kaiser, Illia Polosukhin",
      journal: "NeurIPS 2017",
      citations: "50000+",
      summary: "首次提出 Transformer 架构，使用自注意力（self-attention）替代循环/卷积结构，显著提高并行效率并成为后续大规模语言模型与视觉 Transformer 的基础。",
      link: "https://arxiv.org/abs/1706.03762"
    },
    {
      title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
      authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova",
      journal: "NAACL 2019 / arXiv",
      citations: "70000+",
      summary: "提出双向 Transformer 预训练方法（BERT），通过大规模无监督语料预训练后在多项下游任务上少量微调即可达成或超过当时最佳性能，推动了 NLP 预训练范式。",
      link: "https://arxiv.org/abs/1810.04805"
    },
    {
      title: "Language Models are Few-Shot Learners (GPT-3)",
      authors: "Tom B. Brown, Benjamin Mann, Nick Ryder, et al.",
      journal: "NeurIPS 2020 / arXiv",
      citations: "40000+",
      summary: "介绍 GPT-3，展示了超大规模自回归语言模型在无需或少量微调的 few-shot、one-shot 场景下的强大泛化能力，带来了通用语言模型的广泛应用与讨论。",
      link: "https://arxiv.org/abs/2005.14165"
    }
  ]

  const conferences = [
    { name: "NeurIPS 2025", date: "2025-12-10", location: "New Orleans", status: "即将召开" },
    { name: "ICML 2025", date: "2025-07-21", location: "Honolulu", status: "已结束" },
    { name: "ICLR 2026", date: "2026-05-03", location: "Vienna", status: "征稿中" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* 使用新的动态背景组件 */}
      <TopBackground height="h-64" />
      
      {/* 柔和过渡层 */}
      <div className="fixed top-0 left-0 right-0 h-64" style={{ zIndex: 1 }}>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">学术前沿</h1>
            <p className="text-lg text-gray-700">
              追踪AI领域最新的学术研究动态，包括顶级期刊论文、会议信息和研究趋势
            </p>
          </div>
        </div>
      </div>
      
      {/* 主内容区域 - 移除白色背景 */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-8">

          {/* 热门论文 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">热门论文</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {papers.map((paper, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{paper.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">作者: {paper.authors}</p>
                  <p className="text-sm text-gray-600 mb-2">期刊: {paper.journal}</p>
                  <p className="text-sm text-blue-600 mb-3">引用: {paper.citations}</p>
                  <p className="text-gray-700 mb-4 text-sm">{paper.summary}</p>
                  <a 
                    href={paper.link}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-pill hover:bg-blue-50 transition-colors"
                  >
                    查看论文 →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 学术会议 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">重要会议</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        会议名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        日期
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        地点
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        状态
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {conferences.map((conf, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {conf.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {conf.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {conf.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-pill text-xs font-medium ${
                            conf.status === '即将召开' ? 'bg-yellow-100 text-yellow-800' :
                            conf.status === '已结束' ? 'bg-gray-100 text-gray-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {conf.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
