import axios from "axios";

export const api = axios.create({
    baseURL:"https://food-explorer-api-nx1z.onrender.com",
    withCredentials: true
})