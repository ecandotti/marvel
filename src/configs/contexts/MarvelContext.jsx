import React, { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const MarvelContext = createContext({
    list: [],
    setList: () => {},
    favList: [],
    setFavList: () => {},
})

export const MarvelContextProvider = ({ children }) => {
    const [list, setList] = useState([])
    const [favList, setFavList] = useState([])

    const hydrateFavList = async () => {
        const favListExist = await AsyncStorage.getItem("favList")
        favListExist && setFavList(JSON.parse(favListExist))
    }

    useEffect(() => {
        hydrateFavList()
    }, [])

    useEffect(() => {
        AsyncStorage.setItem("favList", JSON.stringify(favList))
    }, [favList])

    const addOrRemoveToFavList = (item) => {
        const alreadyFav = favList.findIndex((el) => el.id === item.id)

        if (alreadyFav !== -1) {
            setFavList(favList.filter((el) => el.id !== item.id))
        } else {
            setFavList([...favList, item])
        }
    }

    const context = {
        list,
        setList,
        favList,
        setFavList,
        addOrRemoveToFavList,
    }

    return <MarvelContext.Provider value={context}>{children}</MarvelContext.Provider>
}

export default MarvelContext
