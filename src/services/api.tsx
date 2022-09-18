import axios from "axios";

const api = axios.create({
    baseURL:"https://json-server-portifolio.herokuapp.com/",
    timeout: 15000
})

export default api;