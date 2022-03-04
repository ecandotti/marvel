import React, { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
})

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = AsyncStorage.getItem("token")
        token && setIsLoggedIn(token)
    }, [])

    const context = {
        isLoggedIn,
        setIsLoggedIn,
    }
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext
