import axios from 'axios'

export const moviesApi = axios.create({
    baseURL: 'https://api.jikan.moe/v4'
})
