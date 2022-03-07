import axios from "axios"
import React, { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import NetInfo from "@react-native-community/netinfo"

const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    isOffline: false,
    setIsOffline: () => {},
})

export const AuthContextProvider = ({ children }) => {
    const LOGIN_URI = "https://easy-login-api.herokuapp.com/users/login"

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isOffline, setIsOffline] = useState(false)

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable)
            setIsOffline(offline)
        })

        return () => removeNetInfoSubscription()
    }, [])

    const hydrateToken = async () => {
        const token = await AsyncStorage.getItem("token")
        token && setIsLoggedIn(token)
    }

    useEffect(() => {
        hydrateToken()
    }, [])

    const login = async (username, password) => {
        const query = await axios.post(LOGIN_URI, {
            username: username,
            password: password,
        })

        if (query.headers["x-access-token"]) {
            await AsyncStorage.setItem("token", query.headers["x-access-token"])
            await setIsLoggedIn(true)
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem("token")
        await setIsLoggedIn(false)
    }

    const context = {
        isLoggedIn,
        setIsLoggedIn,
        isOffline,
        setIsOffline,
        login,
        logout,
    }
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext
