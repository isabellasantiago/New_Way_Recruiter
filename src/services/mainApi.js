import axios from 'axios';
import { getToken } from './auth'

const Api = axios.create({
    baseURL:'http://localhost:3333'
});

Api.interceptors.request.use(
    (config) => {
        const user = getToken();

        config.headers.Authorization = user?.token;

        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default Api