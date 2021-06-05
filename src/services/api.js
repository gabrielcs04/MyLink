import axios from 'axios';

// key: 41638e981abe1d2af3c7a6bf95388d85db18b456
// base url: https://api-ssl.bitly.com/v4/

export const key = '41638e981abe1d2af3c7a6bf95388d85db18b456';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
})

export default api;