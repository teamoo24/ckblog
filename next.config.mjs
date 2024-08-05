/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/projects/1",
        permanent: true, // リダイレクトが永続的かどうか
      },
    ];
  },
};

export default nextConfig;
