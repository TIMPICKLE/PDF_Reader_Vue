
 
 
//   module.exports = {
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: 'https://api.hypothes.is/api/', //设置要访问的域名和端口号
//                 changeOrigin: true, //设置为跨域
//                 pathRewrite: {
//                     '^/api': '/api' //这里理解成用‘/api’代替target里面的地址，在后面发起请求时，/api就会代替target中的值，可以实现跨域

//                 }
//             }
//         }
//     }
// }
module.exports={
    pwa: {
    name: 'PDF ANNO',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin (GenerateSW or InjectManifest)
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: './service-worker.js',

        // ...other Workbox options...
    }
}}