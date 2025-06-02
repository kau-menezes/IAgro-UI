import axios from "axios";
import { StorageKeys } from "../constants/storage-keys";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { "Content-Type": "application/json" },
    timeout: 20000,
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(StorageKeys.TOKEN);
    
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export { api }