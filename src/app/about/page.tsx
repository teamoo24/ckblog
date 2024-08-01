import Link from "next/link";

const about = () => {
  return (
    <>
      <section className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">自己紹介</h1>
        <p className="text-lg mb-4">
          こんにちは！私は C.Kです。
          です。フロントエンド開発者で、特にNext.jsとTailwind
          CSSを使用してウェブアプリケーションを作成しています。
        </p>
        <p className="text-lg mb-4">私の技術スタックには以下が含まれます：</p>
        <ul className="list-disc list-inside ml-4">
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>Node.js</li>
        </ul>
        <p className="text-lg mb-4">
          プロジェクトや開発の最新情報は、私のGitHubでご覧いただけます。ぜひチェックしてみてください！
        </p>
        <Link
          href="https://github.com/teamoo24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub プロフィールはこちら
        </Link>
      </section>
    </>
  );
};

export default about;
