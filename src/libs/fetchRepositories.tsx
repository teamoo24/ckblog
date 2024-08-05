import Repository from "@/types/Repository";

// utils/fetchRepositories.ts
// ページあたりのリポジトリ数
const perPage = 100;

const fetchAllRepositories = async (): Promise<Repository[]> => {
  const username = "teamoo24"; // GitHubのユーザー名
  let page = 1;
  let allRepositories: Repository[] = [];
  let hasNextPage = true;

  while (hasNextPage) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos = await res.json();
    // レスポンスが空であれば、次のページはない
    if (repos.length === 0) {
      hasNextPage = false;
    } else {
      // 親リポジトリがないリポジトリ（フォークされていないもの）だけをフィルタリング
      const filteredRepos = repos
        .filter((repo: any) => !repo.fork && !repo.parent)
        .map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
        }));

      allRepositories = allRepositories.concat(filteredRepos);
      page += 1; // 次のページへ
    }
  }

  return allRepositories;
};

export default fetchAllRepositories;
