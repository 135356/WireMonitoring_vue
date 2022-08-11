module.exports = {
    outputDir: 'dist/',
    publicPath: './',
    assetsDir: 'static', //静态资源文件目录
    productionSourceMap: false, //是否生成.map
    pages:{
        index:{
            entry:"src/main.js", //入口
            title:"输电线路在线检测系统"
        }
    },
    devServer: {
        host: "0.0.0.0",
        port: 80, //端口号
        https: false, //Boolean
        open: false, //自动启动浏览器
        proxy: {
            "/test": {
                //target: 'http://42.192.117.75/',
                target: 'http://127.0.0.1/',
                changeOrigin: true, //允许跨域
                ws: true, //websocket支持
                pathRewrite: { //表示需要rewrite重写的
                    '^/test': ''
                }
            }
        }
    }
}