import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:9900',
    headers: {
        'Authorization': "JWT_TOKEN",
        'Content-Type': 'application/json',
        withCredentials: true
    }
});

export default api;