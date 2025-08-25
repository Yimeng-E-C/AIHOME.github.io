import React from 'react';

interface RelatedArticle {
  title: string;
  link: string;
}

interface PageTemplateProps {
  title: string;
  content: string;
  relatedArticles: RelatedArticle[];
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, content, relatedArticles }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">相关文章</h2>
          <ul className="list-disc pl-5">
            {relatedArticles.map((article, index) => (
              <li key={index}>
                <a href={article.link} className="text-blue-600 hover:underline">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PageTemplate;
