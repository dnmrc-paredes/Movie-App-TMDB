/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['api.themoviedb.org', 'image.tmdb.org']
  }
}

module.exports = nextConfig
