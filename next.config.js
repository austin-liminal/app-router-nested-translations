/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/en-us",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
