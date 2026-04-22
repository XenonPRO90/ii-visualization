/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // module-0 был переименован в module-1 (Установка и первый проект)
      {
        source: '/modules/module-0',
        destination: '/modules/module-1',
        permanent: true,
      },
      {
        source: '/modules/module-0/:lesson*',
        destination: '/modules/module-1/:lesson*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
