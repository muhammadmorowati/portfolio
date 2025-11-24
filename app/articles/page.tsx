import ArticleCard from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";

export default function ArticlesPageEN() {
  const articles = [
    {
      title: "Mocking, Contract Testing & Observability in Large Microservices Environments",
      summary: "Tom Akehurst explains strategies for overcoming microservice pain points like environment dependency and slow development. He advocates using realistic API simulation at scale, supported by contract testing , API observability, and GenAI integration. Learn to compose observations, simulations, and contracts to maximize confidence and reduce the toil of maintaining realistic, up-to-date mocks.",
      slug: "article-1",
    },
    {
      title: "Article Title 2",
      summary: "Short description...",
      slug: "article-2",
    },
  ];

    return (
        <>
        <Navbar lang="en" />
      <div className="space-y-6">
          
      <h1 className="text-2xl font-bold">All Articles</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((a) => (
          <ArticleCard key={a.slug} {...a} direction="ltr" />
        ))}
      </div>
            </div>
        </>
  );
}
