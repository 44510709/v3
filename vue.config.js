const { defineConfig } = require('@vue/cli-service')
// var px2rem = require('postcss-px2rem')

const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: './', // 主要是这行代码，配置打包后的资源路径
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        //这里的ip和端口是前端项目的;下面为需要跨域访问后端项目
        proxy: {
            '/api': {
                target: 'https://api.hdtest.ichelaba.com', //这里填入你要请求的接口的前缀
                ws: true, //代理websocked
                changeOrigin: true, //虚拟的站点需要更管origin
                secure: true, //是否https接口
                pathRewrite: {
                    '^/api': '' //重写路径
                },
                headers: {
                    referer: 'http://localhost:8080/', //这里后端做了拒绝策略限制，请求头必须携带referer，否则无法访问后台
                }
            }
        }
    },
    // css: {
    //     //css预设器配置项
    //     loaderOptions: {
    //         css: {
    //             importLoaders: 1 // @import 引入的文件可被一个loader处理 （2 可被两个loader处理）
    //         },
    //         // 手机端px转化为rem
    //         postcss: {
    //             // options here will be passed to postcss-loader
    //             plugins: [require('postcss-px2rem')({
    //                 remUnit: 75 //如果是750的设计图需要将remUnit替换成75 这样生成出来的比例就是1rem=100px
    //             })]
    //         }
    //     }
    // }
})