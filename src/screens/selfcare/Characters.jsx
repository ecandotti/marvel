import React, { useContext, useEffect, useState } from "react"
import { FlatList, Text, ActivityIndicator } from "react-native"
import Fuse from "fuse.js"

import { Container, Button } from "../../components/styled-components"

import api from "../../utils/api"

import apiKey from "../../configs/api/apiKey"
import MarvelContext from "../../configs/contexts/MarvelContext"

import Card from "../../components/Card"
import Search from "../../components/Search"
import ModalWrapper from "../../components/ModalWrapper"

const Characters = ({ navigation }) => {
    const { list, setList } = useContext(MarvelContext)

    const [customSearch, setCustomSearch] = useState("")
    const [offset, setOffset] = useState(0)
    const [firstLoad, setFirstLoad] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(async () => {
        setFirstLoad(true)
        await getAllCharacters()
        setFirstLoad(false)
    }, [])

    const getAllCharacters = async () => {
        setLoading(true)
        setError(false)

        try {
            const query = await api.get("/v1/public/characters", {
                params: {
                    ...apiKey,
                    limit: 20,
                    offset,
                },
            })

            await setList([...list, ...query.data.data.results])
            await setOffset((prevCount) => prevCount + 1)
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
        <Container>
            {firstLoad ? (
                <ActivityIndicator size={64} />
            ) : fuseSearch.length > 2 ? (
                <FlatList
                    data={fuseSearch}
                    renderItem={({ item }) => <Card item={item.item} navigation={navigation} />}
                    ListHeaderComponent={<Search customSearch={customSearch} setCustomSearch={setCustomSearch} />}
                    keyExtractor={(item, i) => i}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Card item={item} navigation={navigation} />}
                    keyExtractor={(item, i) => i}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<Search customSearch={customSearch} setCustomSearch={setCustomSearch} />}
                    onEndReached={getAllCharacters}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={isLoading && <ActivityIndicator size={64} />}
                    ListFooterComponentStyle={{ paddingBottom: 50 }}
                />
            )}
            {isError && (
                <>
                    <Text>Error occured</Text>
                    <Button title="Réessayer" onPress={() => getAllCharacters()} />
                </>
            )}
            <ModalWrapper text="Pas de connexion" />
        </Container>
    )
}

export default Characters
