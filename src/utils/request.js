import axios from 'axios'

const service = axios.create({
    baseURL:"http://localhost:8081/",
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use()

// 响应拦截器
service.interceptors.response.use()