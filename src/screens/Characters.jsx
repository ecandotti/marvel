import React, { useContext, useEffect } from "react"
import { SafeAreaView, Button, FlatList } from "react-native"

import apiKey from "../configs/api/apiKey"
import api from "../utils/api"

import AuthContext from "../configs/contexts/AuthContext"
import MarvelContext from "../configs/contexts/MarvelContext"

import Card from "../components/Card"
import { useAsyncStorage } from "@react-native-async-storage/async-storage"

const Characters = () => {
    const LocalStorage = useAsyncStorage()
    const { setIsLoggedIn } = useContext(AuthContext)
    const { list, setList } = useContext(MarvelContext)

    useEffect(() => {
        getAllCharacters()
    }, [])

    const getAllCharacters = async () => {
        const query = await api.get("/v1/public/characters", {
            params: {
                ...apiKey,
            },
        })

        await setList(query.data.data.results)
    }

    const logout = () => {
        setIsLoggedIn(false)
        LocalStorage.removeItem("token")
    }

    return (
        <SafeAreaView>
            <Button title="Déconnexion" onPress={logout} />
            <FlatList data={list} renderItem={Card} keyExtractor={(item) => item.id} />
        </SafeAreaView>
    )
}

export default Characters
