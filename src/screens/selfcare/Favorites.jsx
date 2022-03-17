import React, { useContext, useState } from "react"
import { FlatList, Image } from "react-native"
import Fuse from "fuse.js"

import { Container } from "../../components/styled-components"

import MarvelContext from "../../configs/contexts/MarvelContext"

import Card from "../../components/Card"
import Search from "../../components/Search"

const Favorites = ({ navigation }) => {
    const { favList } = useContext(MarvelContext)

    console.log("Alors : ", favList[0].path)

    const [customSearch, setCustomSearch] = useState("")

    const fuse = new Fuse(favList, {
        keys: ["name"],
    })

    const fuseSearch = fuse.search(customSearch)

    return (
        <Container>
            <Search customSearch={customSearch} setCustomSearch={setCustomSearch} />
            <Image source={{ uri: favList[0].path }} style={{ width: 200, height: 200 }} />
            {/* {fuseSearch.length > 2 ? (
                <FlatList
                    data={fuseSearch}
                    renderItem={({ item }) => <Card item={item.item} navigation={navigation} />}
                    keyExtractor={(item) => item.item.id}
                />
            ) : (
                <FlatList
                    data={favList}
                    renderItem={({ item }) => <Card item={item} navigation={navigation} />}
                    keyExtractor={(item) => item.id}
                />
            )} */}
        </Container>
    )
}

export default Favorites
