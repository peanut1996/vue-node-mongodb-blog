module.exports = {
  devServer: {
    open: true,
    port: 3000
  }
  // proxy: {
  //   '/v1': {
  //     target: 'http://localhost:3000/v1/',
  //     pathRewrite: { '^/v1': '' }
  //   }
  // }
  // proxy: {
  //   '/v1': {
  //     target: 'http://localhost:3000/v1/', // 域名
  //     ws: true, // 是否启用websockets
  //     changOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //     pathRequiresRewrite: {
  //       '^/v1': '/'
  //     }
  //   }
  // }
}
