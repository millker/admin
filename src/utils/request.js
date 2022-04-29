import axios from 'axios'
import { ElMessage,ElMessageBox } from 'element-plus'
import store from '../store'

const service = axios.create({
    baseURL:"http://localhost:8081/",
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    config => {

    },
    error => {

    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {

    },
    error => {

    }
)

export default service