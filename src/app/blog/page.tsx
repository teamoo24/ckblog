import { client } from "@/libs/client";

const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blog: data,
    },
  };
};

const BlogPage = () => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">test</div>
    </>
  );
};

export default BlogPage;
