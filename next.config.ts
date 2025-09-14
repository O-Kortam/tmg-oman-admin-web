const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname:
          'tmg-oman-strapi.tmg-service-eu-de-1-cx2-1-24c93556c7052421b1e777d2c03a04e1-0000.eu-de.containers.appdomain.cloud',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_API_URL:
      'https://tmg-oman-strapi.tmg-service-eu-de-1-cx2-1-24c93556c7052421b1e777d2c03a04e1-0000.eu-de.containers.appdomain.cloud',
  },
};

module.exports = nextConfig;
