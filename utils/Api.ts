import axios from "axios"
import { BaseURL } from "@env"
import AsyncStorage from "@react-native-async-storage/async-storage"

const getheaders = async () => {
    const value = await AsyncStorage.getItem('@token')
    return { Authorization: value }
}


const Api = axios.create({
    baseURL: BaseURL,
    responseType: "json",
    withCredentials: true,
})



export default Api

export {
    getheaders
}