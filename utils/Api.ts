import axios from "axios"
import { BaseURL } from "@env"
const Api = axios.create({
    baseURL: BaseURL,
    responseType: "json",
    withCredentials: true
})



export default Api