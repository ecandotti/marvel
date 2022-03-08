import React, { useContext } from "react"

import { Container, Button } from "../../components/styled-components"

import AuthContext from "../../configs/contexts/AuthContext"

const Settings = () => {
    const { logout } = useContext(AuthContext)

    return (
        <Container>
            <Button title="Deconnexion" onPress={() => logout()} />
        </Container>
    )
}

export default Settings
