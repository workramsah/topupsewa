/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    // Avoid ENOENT on missing .pack.gz when cache is cleared or corrupted
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
};

module.exports = nextConfig; 