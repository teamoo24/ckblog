import ThemeSwitcher from "@/components/ThemeSwitcher";
import { getList } from "@/libs/micromcms";
import parse from "html-react-parser";
import Link from "next/link";

export default async function Home() {
  const { contents } = await getList();
  return (
    <>
      {/* ホームセクション */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">こんにちは！</h2>
        <p className="text-lg mb-4">
          私の個人ブログへようこそ！ここでは、私のポートフォリオや最新のプロジェクト、役立つ記事を共有しています。
        </p>
      </section>

      {/* ブログセクション */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">ブログ記事</h2>
        <ul>
          {contents.map((post) => {
            return (
              <li key={post.id}>
                <Link
                  href={`/articles/${post.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {post.title}
                </Link>
                <div>{parse(post.excerpt)}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
