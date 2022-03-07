import React, { useContext, useEffect, useState } from "react"
import { SafeAreaView, FlatList, Text, Button } from "react-native"
import Fuse from "fuse.js"

import api from "../../utils/api"

import apiKey from "../../configs/api/apiKey"
import MarvelContext from "../../configs/contexts/MarvelContext"

import Card from "../../components/Card"
import Search from "../../components/Search"

const Characters = ({ navigation }) => {
    const { list, setList } = useContext(MarvelContext)

    const [customSearch, setCustomSearch] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(() => {
        getAllCharacters()
    }, [])

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

    const fuse = new Fuse(list, {
        keys: ["name"],
    })

    const fuseSearch = fuse.search(customSearch)

    return (
        <SafeAreaView>
            <Search customSearch={customSearch} setCustomSearch={setCustomSearch} />
            {isLoading ? (
                <Text>Fetching data...</Text>
            ) : fuseSearch.length > 2 ? (
                <FlatList
                    data={fuseSearch}
                    renderItem={({ item }) => <Card item={item.item} navigation={navigation} />}
                    keyExtractor={(item) => item.item.id}
                />
            ) : (
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Card item={item} navigation={navigation} />}
                    keyExtractor={(item) => item.id}
                />
            )}
            {isError && (
                <>
                    <Text>Error occured</Text>
                    <Button title="Réessayer" onPress={() => getAllCharacters()} />
                </>
            )}
        </SafeAreaView>
    )
}

export default Characters
