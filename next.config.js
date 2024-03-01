const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  basePath: "/docs",
  async redirects() {
    return [
      {
        source: '/guides/intro/quickstart',
        destination: '/quickstart',
        permanent: true,
      },
      {
        source: '/guides/intro/intro',
        destination: '/quickstart',
        permanent: true,
      },
      {
        source: '/releases/readyset-core',
        destination: 'https://github.com/readysettech/readyset/releases',
        permanent: true,
      },
      {
        source: '/quickstart',
        destination: '/demo',
        permanent: true,
      },
      {
        source: '/deploy/configure-your-database',
        destination: '/get-started/configure-your-database/postgres',
        permanent: false
      }
    ]
  },

})
