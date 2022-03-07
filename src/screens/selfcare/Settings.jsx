import React, { useContext } from "react"
import { View, Button } from "react-native"

import AuthContext from "../../configs/contexts/AuthContext"

const Settings = () => {
    const { logout } = useContext(AuthContext)

    return (
        <View>
            <Button title="Deconnexion" onPress={() => logout()} />
        </View>
    )
}

export default Settings
