import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/micromcms";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased main-article">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {post.title}
            </h1>
          </header>
          {parse(post.content)}
        </article>
      </div>
    </main>
  );
}
