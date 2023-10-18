/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    local: 'local',
    dev: 'dev',
    staging: 'stg',
    prod: 'prod'
  },
  publicRuntimeConfig: {
    restUrl: "http://localhost",
    restPort: 5000
  }
}

module.exports = nextConfig
