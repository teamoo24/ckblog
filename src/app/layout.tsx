import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  robots: 'noindex',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white">
        {/* ヘッダー */}
        <header className="bg-gray-800 text-white p-4 dark:bg-gray-700">
          <h1 className="text-xl">CK Blog</h1>
        </header>

        {/* メインコンテンツ */}
        <main className="flex flex-1">
          {/* Primary セクション */}
          <section className="flex-1 p-4 bg-gray-100 dark:bg-gray-800">
            {children}
          </section>

          {/* Secondary セクション */}
          <aside className="w-1/4 p-4 bg-gray-200 dark:bg-gray-700">
            <h2 className="text-xl mb-4">Secondary Section</h2>
            <p>ここにサイドコンテンツが入ります。</p>
          </aside>
        </main>

        {/* フッター */}
        <footer className="bg-gray-800 text-white p-4 text-center dark:bg-gray-700">
          <p>&copy; 2024 My Portfolio</p>
        </footer>
      </body>
    </html>
  )
}
