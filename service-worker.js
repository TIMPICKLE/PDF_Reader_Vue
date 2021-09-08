// 设置相应缓存的名字的前缀和后缀
workbox.core.setCacheNameDetails({
    prefix: 'pdf-image-vue-cache',
    suffix: 'v1.0.0',
})
// 让我们的service worker尽快的得到更新和获取页面的控制权
workbox.core.skipWaiting();
workbox.core.clientsClaim();
 
/* vue-cli3.0通过workbox-webpack-plagin 来实现相关功能，我们需要加入
* 以下语句来获取预缓存列表和预缓存他们，也就是打包项目后生产的html，js，css等\* 静态文件
*/
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
// 缓存web的css资源
workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // 使用缓存，但尽快在后台更新
    workbox.strategies.staleWhileRevalidate({
        // 使用自定义缓存名称
        cacheName: 'css-cache'
    })
);
 
// 缓存web的js资源
workbox.routing.registerRoute(
    // 缓存JS文件
    /.*\.js/,
    // 使用缓存，但尽快在后台更新
    workbox.strategies.staleWhileRevalidate({
        // 使用自定义缓存名称
        cacheName: 'js-cache'
    })
);
 
// 缓存web的图片资源
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 1 * 24 * 60 * 60 // 设置缓存有效期为30天
            })
        ]
    })
);
 
// 我们很多资源在其他域名上，比如cdn、oss等，这里做单独处理，需要支持跨域
workbox.routing.registerRoute(
    /^https:\/\/cdn\.my\.com\/.*\.(jpe?g|png|gif|svg)/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cdn-images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 1 * 24 * 60 * 60 // 设置缓存有效期为5天
            })
        ],
        fetchOptions: {
            credentials: 'include' // 支持跨域
        }
    })
);
 
// 缓存get api请求的数据
// workbox.routing.registerRoute(
//     new RegExp('https://m.my.com/api'),
//     workbox.strategies.networkFirst({
//         cacheName: 'api'
//     })
// );
 
  // 缓存post api请求的数据
  // const bgSyncPlugin = new workbox.backgroundSync.Plugin('apiQueue', {
  //   maxRetentionTime: 1 * 60
  // });
 
  // workbox.routing.registerRoute(
  //   /.*\/api\/.*/,
  //   new workbox.strategies.NetworkOnly({
  //     plugins: [bgSyncPlugin]
  //   }),
  //   'POST'
  // );