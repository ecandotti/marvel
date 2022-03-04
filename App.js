import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider } from "styled-components"

import StackNavigator from "./src/configs/navigation/StackNavigator"
import { AuthContextProvider } from "./src/configs/contexts/AuthContext"
import { MarvelContexttProvider } from "./src/configs/contexts/MarvelContext"
import { darkTheme, lightTheme } from "./src/configs/themes/Theme"

export default function App() {
    const isDarkMode = useColorScheme() === "dark"

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <AuthContextProvider>
                <MarvelContexttProvider>
                    <NavigationContainer>
                        <StackNavigator />
                    </NavigationContainer>
                </MarvelContexttProvider>
            </AuthContextProvider>
        </ThemeProvider>
    )
}
