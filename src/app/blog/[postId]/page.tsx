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
    <div>
      <div className="entry-header text-blue-800 dark:text-white font-bold">
        <h1>{post.title}</h1>
      </div>
      <div>{parse(post.content)}</div>
    </div>
  );
}
