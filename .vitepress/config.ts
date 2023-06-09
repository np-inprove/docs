import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iNProve Docs",
  description: "Gamified learning for everyone",
  themeConfig: {
    outline: 'deep',

    nav: [
      { text: 'Guide', link: '/guide/get-started' },
      { text: 'Reference', link: '/reference/overview' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Get started', link: '/guide/get-started' },
          { text: 'Deployment', link: '/guide/deployment' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Overview', link: '/reference/overview' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/np-inprove' }
    ]
  }
})
