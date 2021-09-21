import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-desafio-fullstack-eureka.herokuapp.com/'
})

export default api
