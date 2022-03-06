import React, { useContext } from "react"
import { View, FlatList } from "react-native"

import MarvelContext from "../../configs/contexts/MarvelContext"

import Card from "../../components/Card"

const Favorites = ({ navigation }) => {
    const { favList } = useContext(MarvelContext)

    return (
        <View>
            <FlatList
                data={favList}
                renderItem={({ item }) => <Card item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Favorites
