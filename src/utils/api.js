import axios from "axios"
import { MARVEL_URI } from "@env"

const api = axios.create({
    baseURL: MARVEL_URI,
})

export default api
