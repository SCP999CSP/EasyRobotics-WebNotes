import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'

export default defineConfig({
  title: "EasyRobotic HomePage",
  description: "For student learning",

  head: [["link", { rel: "icon", href: "/2.ico" }]],

  // ⭐ 核心：开启 i18n
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
      themeConfig: {
        nav: nav,
        sidebar: sidebar
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: nav,
        sidebar: sidebar
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      themeConfig: {
        nav: nav,
        sidebar: sidebar
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SCP999CSP/ROS-WebNotes' },
      { icon: 'youtube', link: 'https://twitter.com/youyuxi' },
      { icon: 'linkedin', link: '' }
    ]
  }
})
