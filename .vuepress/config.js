// config.js
module.exports = {
    title: 'monun-docs', // 사이트 타이틀
    description: 'Documentation contribute purposes. For Monun.',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    themeConfig: {
      logo: 'https://avatars.githubusercontent.com/u/77531416?v=4', // 로고 이미
      sidebar: 'auto' // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
    }
  }
  
