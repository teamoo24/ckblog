import React from "react";
import Repository from "@/types/Repository";
import fetchRepositories from "@/libs/fetchRepositories";

const ProjectsPage = async () => {
  let repositories: Repository[] = [];

  try {
    repositories = await fetchRepositories();
  } catch (error) {
    console.error(error);
  }

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">プロジェクト一覧</h1>
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
              <p>{repo.description}</p>
            </li>
          ))
        ) : (
          <li>リポジトリが見つかりませんでした。</li>
        )}
      </ul>
    </section>
  );
};

export default ProjectsPage;
