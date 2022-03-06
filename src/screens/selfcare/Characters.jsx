import React, { useContext, useEffect, useState } from "react"
import { SafeAreaView, Button, FlatList, Text } from "react-native"

import api from "../../utils/api"

import apiKey from "../../configs/api/apiKey"
import AuthContext from "../../configs/contexts/AuthContext"
import MarvelContext from "../../configs/contexts/MarvelContext"

import Card from "../../components/Card"

const Characters = ({ navigation }) => {
    const { logout } = useContext(AuthContext)
    const { list, setList } = useContext(MarvelContext)

    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(() => {
        const getAllCharacters = async () => {
            setLoading(true)
            setError(false)

            try {
                const query = await api.get("/v1/public/characters", {
                    params: {
                        ...apiKey,
                    },
                })

                await setList(query.data.data.results)
            } catch (error) {
                setError(true)
            }

            setLoading(false)
        }

        getAllCharacters()
    }, [])

    return (
        <SafeAreaView>
            <Button title="Deconnexion" onPress={() => logout()} />
            {isLoading ? (
                <Text>Fetching data...</Text>
            ) : (
                list && (
                    <FlatList
                        data={list}
                        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
                        keyExtractor={(item) => item.id}
                    />
                )
            )}
            {isError && <Text>Error occured</Text>}
        </SafeAreaView>
    )
}

export default Characters
