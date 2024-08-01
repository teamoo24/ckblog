import React from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const fetchRepositories = async (): Promise<Repository[]> => {
  const username = "teamoo24"; // GitHubのユーザー名
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }
  return res.json();
};

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
              <p className="text-gray-600">{repo.description}</p>
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
