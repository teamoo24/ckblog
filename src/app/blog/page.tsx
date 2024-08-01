import { getList } from "@/libs/micromcms";
import Link from "next/link";

const BlogPage = async () => {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  return (
    <div>
      <h1>{time}</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPage;
