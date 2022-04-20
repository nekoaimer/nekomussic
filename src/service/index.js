import axios from 'axios'

export default function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:9001',
    timeout: 5000,
    changeOrigin: true, 
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  })
  
  return instance(config)
}
