import React from "react"
import { useColorScheme } from "react-native"
import { ThemeProvider } from "styled-components"

import StackNavigator from "./src/configs/routes"
import { AuthContextProvider } from "./src/configs/contexts/AuthContext"
import { MarvelContextProvider } from "./src/configs/contexts/MarvelContext"
import { darkTheme, lightTheme } from "./src/configs/themes/Theme"

export default function App() {
    const isDarkMode = useColorScheme() === "dark"

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <AuthContextProvider>
                <MarvelContextProvider>
                    <StackNavigator />
                </MarvelContextProvider>
            </AuthContextProvider>
        </ThemeProvider>
    )
}
