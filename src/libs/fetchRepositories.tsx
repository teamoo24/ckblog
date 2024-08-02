import Repository from "@/types/Repository";

const fetchRepositories = async (
  page: number,
  perPage: number
): Promise<Repository[]> => {
  const username = "teamoo24"; // GitHubのユーザー名
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos = await res.json();
  // フォークされたリポジトリを除外
  return repos
    .filter((repo: any) => !repo.fork)
    .map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
    }));
};

export default fetchRepositories;
