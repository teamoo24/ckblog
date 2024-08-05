import { getList } from "@/libs/micromcms";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async () => {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  return (
    <div>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
        {contents.map((post) => {
          return (
            <div
              className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-slate-600 dark:text-white sm:shrink-0 sm:grow sm:basis-0"
              key={post.id}
            >
              <Link href={`/articles/${post.id}`}>
                <Image
                  className="rounded-t-lg"
                  src={`${post.eyecatch?.url}`}
                  width={500}
                  height={500}
                  alt={`${post.id}`}
                ></Image>
              </Link>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  {`${post.title}`}
                </h5>
                <p className="mb-4 text-base">{`${post.excerpt}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
