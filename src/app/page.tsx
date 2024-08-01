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
        <a href="#" className="text-blue-500 hover:underline">
          最近の記事を読む
        </a>
      </section>

      {/* ポートフォリオセクション */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">ポートフォリオ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">プロジェクト1</h3>
            <p className="mt-2">プロジェクトの説明がここに入ります。</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">
              詳細を見る
            </a>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">プロジェクト2</h3>
            <p className="mt-2">プロジェクトの説明がここに入ります。</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">
              詳細を見る
            </a>
          </div>
        </div>
      </section>

      {/* ブログセクション */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">ブログ記事</h2>
        <ul>
          {contents.map((post) => {
            return (
              <li key={post.id}>
                <Link
                  href={`/static/${post.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {post.title}
                </Link>
                <div>{parse(post.content)}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
