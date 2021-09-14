import axios from 'axios';

const api = axios.create({
    baseURL: 'http://45.228.105.9:3333',
})

export default api;