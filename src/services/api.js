import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://192.168.8.184:1337',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
