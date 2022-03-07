import React from "react"
import { View, Text, Image } from "react-native"

const Character = ({ route }) => {
    const { character } = route.params

    return (
        <View>
            <Image
                source={{ uri: `${character?.thumbnail.path}.${character?.thumbnail.extension}` }}
                style={{ width: 100, height: 100 }}
            />
            <Text>{character?.name}</Text>
        </View>
    )
}

export default Character
