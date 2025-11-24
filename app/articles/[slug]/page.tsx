import Navbar from "@/components/Navbar";
import { articlesEN } from "@/data/articles-en";
import { notFound } from "next/navigation";

type ArticleProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticleEN({ params }: ArticleProps) {
  const { slug } = await params;

  const article = articlesEN.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <>
      <Navbar lang="en" />

      <article className="space-y-6 max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold">{article.title}</h1>

        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </>
  );
}
