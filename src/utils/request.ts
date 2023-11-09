// 对于axios的函数库进行二次的封装
import axios from "axios";
import { ElMessage } from "element-plus";
// 利用axios.create的方法去创建一个axios实例：

const request = axios.create({
  baseURL: "/admin", //请求的基础路径的设置,
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use((config) => {
  return config;
});

//  响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 处理http网络的状态的错误
    let status = error.response.status;
    switch (status) {
      case 404:
        ElMessage({
          type: "error",
          message: error.message,
        });
        break;
      case 500 | 501 | 502 | 503 | 504 | 505:
        ElMessage({
          type: "error",
          message: "服务器错误",
        });
    }
    return Promise.reject(new Error(error.message));
  }
);

// 对外暴露axios

export default request;
