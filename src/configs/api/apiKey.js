import md5 from "blueimp-md5"
import { MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY } from "@env"

const ts = "marvel-api"
const publicKey = MARVEL_PUBLIC_KEY
const privateKey = MARVEL_PRIVATE_KEY
const hash = md5(`${ts}${privateKey}${publicKey}`)

const apiKey = {
    ts,
    apikey: publicKey,
    hash,
}

export default apiKey
