import { View, Text, Image } from "react-native"
import React from "react"

const Card = ({ item: { name, thumbnail } }) => {
    return (
        <View style={{ display: "flex", flexDirection: "row", margin: 20 }}>
            <Image source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }} style={{ width: 100, height: 100 }} />
            <Text>{name}</Text>
        </View>
    )
}

export default Card
