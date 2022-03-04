import React, { useState, createContext } from "react"

const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
})

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const context = {
        isLoggedIn,
        setIsLoggedIn,
    }
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext
