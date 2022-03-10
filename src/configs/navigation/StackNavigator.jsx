import React, { useContext } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AuthContext from "../contexts/AuthContext"

import Login from "../../screens/guest/Login"

import HomeSelfcare from "../../screens/selfcare"
import Character from "../../screens/selfcare/Character"

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Stack.Navigator>
            {isLoggedIn ? (
                <Stack.Group>
                    <Stack.Screen name="HomeSelfcare" component={HomeSelfcare} options={{ headerShown: false }} />
                    <Stack.Screen name="Character" component={Character} />
                </Stack.Group>
            ) : (
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} options={{ animationTypeForReplace: "push" }} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    )
}

export default StackNavigator
