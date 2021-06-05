// config.js
module.exports = {
    title: 'monun-docs', // 사이트 타이틀
    description: 'Documentation contribute purposes. For Monun.',
    themeConfig: {
      logo: 'https://avatars.githubusercontent.com/u/77531416?v=4', // monun logo
      sidebar: [
        {
          title: 'MonunDocs',   // required
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            '/',
            {
              title: 'Farm',   // required
              collapsable: true, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/farm/Server-Error-FaQ'
              ]
            },
            {
              title: 'Inv-Captive',   // required
              collapsable: true, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/inv-captive/Server-Error-FaQ',
                '/inv-captive/Server-Setup'
              ]
            },
            {
              title: 'Minigame-Fortress',   // required
              collapsable: true, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/minigame-fortress/Java-Installation',
                '/minigame-fortress/Server-Setup'
              ]
            }
          ]
        }
      ]
    }
  }
  
