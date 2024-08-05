/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/projects/1",
        permanent: true, // リダイレクトが永続的かどうか
      },
      {
        source: "/blog",
        destination: "/blog/1",
        permanent: true, // リダイレクトが永続的かどうか
      },
    ];
  },
};

export default nextConfig;
