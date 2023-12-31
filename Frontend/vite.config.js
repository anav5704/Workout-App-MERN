import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   server:{
    proxy: {
        "/api/workouts" : "http://localhost:4000",     
        "/api/user/signup" : "http://localhost:4000",
        "/api/user/login" : "http://localhost:4000"  
      }
   },
  plugins: [react()],
})
