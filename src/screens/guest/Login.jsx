import React, { useContext, useState } from "react"
import { View, Image, Dimensions } from "react-native"

import { Container, Button, TextInput } from "../../components/styled-components"

import AuthContext from "../../configs/contexts/AuthContext"

import ModalWrapper from "../../components/ModalWrapper"

const win = Dimensions.get("window")

const Login = () => {
    const { login } = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Container>
            <View style={{ marginBottom: 50 }}>
                <Image
                    style={{
                        width: win.width / 2,
                        height: win.width / 4,
                        resizeMode: "contain",
                        alignSelf: "center",
                    }}
                    resizeMode="stretch"
                    source={{ uri: "https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png" }}
                />
            </View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(e) => setUsername(e)}
                color="#dfe6e9"
                icon="person-outline"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(e) => setPassword(e)}
                secureTextEntry
                color="#dfe6e9"
                icon="lock-closed-outline"
            />
            <Button title="Connexion" onPress={() => login(username, password)} bgColor="#c23616" />
            <ModalWrapper text="Pas de connexion" />
        </Container>
    )
}

export default Login
