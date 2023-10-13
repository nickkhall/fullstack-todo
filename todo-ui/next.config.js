/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    local: 'local',
    dev: 'dev',
    staging: 'stg',
    prod: 'prod'
  }
}

module.exports = nextConfig
