import axios from 'axios'

export const loginApi = axios.create({
    baseURL: 'https://dummyjson.com'
})

export const cepApi = axios.create({
    baseURL: 'https://viacep.com.br/ws'
})