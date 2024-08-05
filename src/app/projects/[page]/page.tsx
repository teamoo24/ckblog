import { Metadata } from "next";
import React from "react";
import Repository from "@/types/Repository";
import fetchRepositories from "@/libs/fetchRepositories";

export const metadata: Metadata = {
  title: "プロジェクト一覧",
};

const ProjectsPage = async ({ params }: { params: { page?: string } }) => {
  const page = params.page ? parseInt(params.page, 10) : 1; // ページ番号、指定がなければ1
  const perPage = 20; // 1ページあたりのリポジトリ数

  let repositories: Repository[] = [];
  let error: string | null = null;

  try {
    const allRepositories = await fetchRepositories();
    console.log(allRepositories.length);
    // ページネーション
    repositories = allRepositories.slice((page - 1) * perPage, page * perPage);
  } catch (err) {
    error = (err as Error).message;
  }

  const totalRepositories = (await fetchRepositories()).length; // 全リポジトリ数
  const totalPages = Math.ceil(totalRepositories / perPage); // 総ページ数
  const previousPage = page > 1 ? page - 1 : null; // 前のページ番号
  const nextPage = page < totalPages ? page + 1 : null; // 次のページ番号

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">プロジェクト一覧</h1>
      {error ? (
        <p className="text-red-500">エラー: {error}</p>
      ) : (
        <>
          <ul className="list-disc list-inside ml-4">
            {repositories.length > 0 ? (
              repositories.map((repo) => (
                <li key={repo.name} className="mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {repo.name}
                  </a>
                  <p className="text-gray-600">{repo.description}</p>
                </li>
              ))
            ) : (
              <li>リポジトリが見つかりませんでした。</li>
            )}
          </ul>

          <div className="mt-4 flex justify-between">
            {previousPage && (
              <a
                href={`/projects/${previousPage}`}
                className="text-blue-500 hover:underline"
              >
                前のページ
              </a>
            )}
            {nextPage && (
              <a
                href={`/projects/${nextPage}`}
                className="text-blue-500 hover:underline"
              >
                次のページ
              </a>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectsPage;
