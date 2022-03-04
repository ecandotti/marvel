import React, { useState, createContext } from "react"

const MarvelContext = createContext({
    list: [],
    setList: () => {},
})

export const MarvelContexttProvider = ({ children }) => {
    const [list, setList] = useState([])

    const context = {
        list,
        setList,
    }
    return <MarvelContext.Provider value={context}>{children}</MarvelContext.Provider>
}

export default MarvelContext
