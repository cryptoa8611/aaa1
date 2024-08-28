const nextConfig = {
  experimental: {
    css: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
};

export default nextConfig;

