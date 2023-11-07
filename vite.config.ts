import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
 
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'src')
    }
  },
  // 配置代理kuayu

  server: {
    proxy: {
      // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true,
      },
    }
  }
})
