module.exports = {
    // mode: 'universal',    //  当前渲染使用模式

    /*
    ** Headers of the page  //  页面head配置信息
    */
    head: {
        title: '跳蚤的 nuxt 学习网站',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: '跳蚤的 nuxt 学习网站，淘宝、小红书、知乎'}
        ],
        link: [ //  favicon，若引用css不会进行打包处理
            {rel: 'icon', type: 'image/x-icon', href: '/dog.ico'}
        ],
        script: [
            {src: 'https://hm.baidu.com/hm.js?8104ead3cd8d6f83078d1f73f87cc8ab'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#b1b1b1'},  //  页面进度条

    css: [    //  全局css（会进行webpack打包处理）
        'element-ui/lib/theme-chalk/index.css'
    ],
    plugins: [        //  插件
        {src: '~/plugins/element-ui', ssr: true},
        {src: '~plugins/ga.js', ssr: false}
    ]
    // ,
    // modules: [        //  模块
    //   '@nuxtjs/axios',
    // ]
    ,
    /*
    ** Build configuration
    */
    build: { //  打包
        /*
        ** Run ESLint on save
        */
        vendor: ['element-ui', 'axios'],
        extend(config, {isDev, isClient}) {  //  webpack自定义配置
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    server: {
        port: 4000
    }
}

