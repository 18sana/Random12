import axios from "axios";
const api = axios.create({
    baseURL:"https://reactbackend-jm4x.onrender.com",
});
export default api;