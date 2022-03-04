import React, { useContext, useEffect } from "react"
import { SafeAreaView, Button, FlatList } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import apiKey from "../configs/api/apiKey"
import api from "../utils/api"

import AuthContext from "../configs/contexts/AuthContext"
import MarvelContext from "../configs/contexts/MarvelContext"

import Card from "../components/Card"

const Characters = () => {
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
        AsyncStorage.removeItem("token")
    }

    return (
        <SafeAreaView>
            <Button title="Déconnexion" onPress={logout} />
            <FlatList data={list} renderItem={Card} keyExtractor={(item) => item.id} />
        </SafeAreaView>
    )
}

export default Characters
