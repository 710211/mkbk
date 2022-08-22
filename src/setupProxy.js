// 建立代理，链接多个服务器
// React版本2.0以上用这个
const { createProxyMiddleware: proxy } = require('http-proxy-middleware')
// const  proxy = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        proxy('/api1', { //遇见api1的前置请求，就会触发该代理配置
            target: 'http://localhost:5000', //请求转发地址
            changeOrigin: true, //控制服务器收到的响应头中Host字段的值-用来迷惑服务器
            pathRewrite: { '^/api1': '' } //重写请求路径，将/api1转化为空字符串
        })
    )
}