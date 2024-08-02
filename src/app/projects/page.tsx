import fetchRepositories from "@/libs/fetchRepositories";
import React from "react";

const ProjectsPageDefault = async () => {
  const defaultPage = 1;
  const perPage = 20;
  const repositories = await fetchRepositories(defaultPage, perPage);

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">プロジェクト一覧</h1>
      <ul className="list-disc list-inside ml-4">
        {repositories.map((repo) => (
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
        ))}
      </ul>
      <div className="mt-4">
        <a href="/projects/2" className="text-blue-500 hover:underline">
          次のページ
        </a>
      </div>
    </section>
  );
};

export default ProjectsPageDefault;
