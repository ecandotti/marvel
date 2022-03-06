import React, { useContext, useState } from "react"
import { SafeAreaView, TextInput, Button } from "react-native"

import AuthContext from "../../configs/contexts/AuthContext"

const Login = () => {
    const { login } = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SafeAreaView>
            <TextInput placeholder="Username" value={username} onChangeText={(e) => setUsername(e)} />
            <TextInput placeholder="Password" value={password} onChangeText={(e) => setPassword(e)} secureTextEntry />
            <Button title="Connexion" onPress={() => login(username, password)} />
        </SafeAreaView>
    )
}

export default Login