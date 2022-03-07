import React, { useContext } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"

import MarvelContext from "../../configs/contexts/MarvelContext"

const Card = ({ item: { name, thumbnail }, navigation, item }) => {
    const { addOrRemoveToFavList } = useContext(MarvelContext)

    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate("Character", {
                    character: item,
                })
            }
        >
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                <Image
                    source={{ uri: `${thumbnail?.path}.${thumbnail?.extension}` }}
                    style={{ width: 100, height: 100 }}
                />
                <Text>{name}</Text>
                <TouchableOpacity onPress={() => addOrRemoveToFavList(item)}>
                    <Text>Fav</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default Card
