import Axios from 'axios'

export const axios = Axios.create({
  baseURL: 'http://api.github.com',
  headers: {
    'Content-Type': 'application/json'
  }
})
