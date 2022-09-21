import axios from 'axios'

// 创建实例时配置默认值
var instance = axios.create({
  baseURL: "http://127.0.0.1:4523",
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});


//添加一个请求拦截器
instance.interceptors.request.use(function (config) {
  //在请求发出之前进行一些操作
  config.headers.token = 'token'
  return config;
});
//添加一个响应拦截器
instance.interceptors.response.use(function (res) {
  //在这里对返回的数据进行处理
  let data = res.data;
  return res.data;
})

export default instance