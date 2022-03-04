import axios from "axios"
import React, { useContext, useState } from "react"
import { SafeAreaView, TextInput, Button } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import AuthContext from "../configs/contexts/AuthContext"

const Login = () => {
    const LOGIN_URI = "https://easy-login-api.herokuapp.com/users/login"

    const { setIsLoggedIn } = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        const query = await axios.post(LOGIN_URI, {
            username: username,
            password: password,
        })

        if (query.headers["x-access-token"]) {
            await AsyncStorage.setItem("token", query.headers["x-access-token"])
            await setIsLoggedIn(true)
        }
    }

    return (
        <SafeAreaView>
            <TextInput placeholder="Username" value={username} onChangeText={(e) => setUsername(e)} />
            <TextInput placeholder="Password" value={password} onChangeText={(e) => setPassword(e)} secureTextEntry />
            <Button title="Connexion" onPress={login} />
        </SafeAreaView>
    )
}

export default Login
