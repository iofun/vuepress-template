module.exports = {
  title: '前端文档',
  description: '前端文档',
  keywords: '前端文档',
  base: '/',
  host:'127.0.0.1',
  port:'8091',
  open:true,
  dest: './dist', // 打包路径
  theme: 'local',
  extraWatchFiles: [ // 指定额外的需要被监听的文件
    '.vuepress/foo.js', // 使用相对路径
    '/path/to/bar.js'   // 使用绝对路径
  ],
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.site-name'
    }],
    ['@vuepress/back-to-top'],
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './assets',
      }
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.png', // 导航栏Logo 注意：public作为资源根路径
    search: true, // 搜索
    searchMaxSuggestions: 10,// 搜索结果数量
    smoothScroll: true, // 页面滚动
    sidebarDepth: 2, //默认的深度是 1
    lastUpdated: true, //最后更新时间
    activeHeaderLinks: true, // 默认值：true
    // 导航栏
    nav: [
      { text: '首页', link: '/', },
      { text: '百度', link: 'https://www.baidu.com'},
      { text: '谷歌', link: 'https://google.com'},
      { text: 'vuepress', link: 'https://vuepress.vuejs.org/zh/'}
    ],
    // 侧边栏
    sidebar: [
      {
        title: '文档首页',
        collapsable: false,
        path: '/'
      },
      {
        title: '指南介绍',
        collapsable: false,
        path: '/zh/guide'
      },
      // {
      //   title: '其他菜单',
      //   collapsable: true,
      //   children: [
      //     {title: '平台简介', path: '/zh/guide'}
      //   ]
      // },
    ]
  }
};









