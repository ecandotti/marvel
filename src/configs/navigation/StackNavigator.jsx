import React, { useContext } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AuthContext from "../contexts/AuthContext"

import Login from "../../screens/Login"
import Characters from "../../screens/Characters"
import Character from "../../screens/Character"

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Stack.Navigator>
            {isLoggedIn ? (
                <Stack.Group>
                    <Stack.Screen name="Characters" component={Characters} />
                    <Stack.Screen name="Character" component={Character} />
                </Stack.Group>
            ) : (
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    )
}

export default StackNavigator
