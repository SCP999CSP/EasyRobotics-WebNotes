import { defineConfig } from 'vitepress'
import { cn_nav, en_nav, fr_nav } from './nav/index.mts'
import { cn_sidebar, en_sidebar, fr_sidebar} from './sidebar/index.mts'


export default defineConfig({
  title: "EasyRobotic HomePage",
  description: "For student learning",
  base: '/',
  head: [["link", { rel: "icon", href: "/2.ico" }]],

  //  i18n
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
      themeConfig: {
        nav: en_nav,
        sidebar: en_sidebar
      }
    },
    
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      themeConfig: {
        nav: fr_nav,
        sidebar: fr_sidebar
      },
      
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: cn_nav,
        sidebar: cn_sidebar
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
