import React from "react";
import Repository from "@/types/Repository";
import fetchRepositories from "@/libs/fetchRepositories";

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const page = parseInt(searchParams.page || "1", 10); // 現在のページ番号
  const perPage = 20; // 1ページあたりのリポジトリ数

  let repositories: Repository[] = [];
  let error: string | null = null;

  try {
    repositories = await fetchRepositories(page, perPage);
  } catch (err) {
    error = (err as Error).message;
  }

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
            {page > 1 && (
              <a
                href={`?page=${page - 1}`}
                className="text-blue-500 hover:underline"
              >
                前のページ
              </a>
            )}
            <a
              href={`?page=${page + 1}`}
              className="text-blue-500 hover:underline"
            >
              次のページ
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectsPage;
