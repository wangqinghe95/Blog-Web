
import axios from 'axios'
export function request (config) {
  const instance = axios.create({
    // baseURL: 'http://127.0.0.1:8000',
    // baseURL: 'http://192.168.163.129:8888',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
  return instance(config)
}
