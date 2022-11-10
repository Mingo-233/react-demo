const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    proxy('/api1',{
      target:'http://localhost:5000', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api1':''} //重写请求路径(必须)
    }),
    proxy('/api2',{
      target:'http://localhost:5001', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api2':''} //重写请求路径(必须)
    })
  )
}