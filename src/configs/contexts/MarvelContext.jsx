import React, { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import RNFS from "react-native-fs"

const MarvelContext = createContext({
    list: [],
    setList: () => {},
    favList: [],
    setFavList: () => {},
})

export const MarvelContextProvider = ({ children }) => {
    const [list, setList] = useState([])
    const [favList, setFavList] = useState([])

    useEffect(() => {
        const hydrateFavList = async () => {
            const readFile = await RNFS.readDir(RNFS.DocumentDirectoryPath)

            setFavList([readFile[0]])

            // const ok = await RNFS.readFile(info[0])
            // console.log(ok)
            // info && setFavList([info])
            // .then((result) => {

            //     RNFS.stat(result[0].path))
            // })
            // .then((statResult) => {
            //     if (statResult[0].isFile()) {
            //         // if we have a file, read it
            //         return RNFS.readFile(statResult[1])
            //     }

            //     return "no file"
            // })
            // .then((contents) => {
            //     // log the file contentsr
            //     console.dir(contents)
            // })
            // const favListExist = await AsyncStorage.getItem("favList")
            // favListExist && setFavList(JSON.parse(favListExist))
        }

        hydrateFavList()
    }, [])

    // useEffect(() => {
    //     AsyncStorage.setItem("favList", JSON.stringify(favList))
    // }, [favList])

    const addOrRemoveToFavList = async (item) => {
        const alreadyFav = await favList.findIndex((el) => el.id === item.id)

        const pathInfo = `${RNFS.DocumentDirectoryPath}/${item.id}.json`
        const pathImg = `${RNFS.DocumentDirectoryPath}/${item.id}.${item.thumbnail.extension}`

        console.log(pathInfo)
        console.log(pathImg)

        if (alreadyFav !== -1) {
            setFavList(favList.filter((el) => el.id !== item.id))
            await RNFS.unlink(pathInfo)
            await RNFS.unlink(pathImg)
        } else {
            setFavList([...favList, item])
            await RNFS.writeFile(pathInfo, JSON.stringify(item))

            const imageOptions = {
                fromUrl: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                toFile: pathImg,
                background: true,
                begin: (res) => console.log("begin : ", res),
                progress: (res) => console.log("progress : ", res),
            }
            await RNFS.downloadFile(imageOptions)
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
