import React, { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"

import api from "../../utils/api"
import apiKey from "../../configs/api/apiKey"

const Character = ({ route }) => {
    const { marvelId } = route.params

    const [character, setCharacter] = useState([])

    useEffect(() => {
        getCharacter()
    }, [])

    const getCharacter = async () => {
        const query = await api.get(`/v1/public/characters/${marvelId}`, {
            params: {
                ...apiKey,
            },
        })

        setCharacter(query.data.data.results[0])
    }

    return (
        <View>
            {/* <Image
                source={{ uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }}
                style={{ width: 100, height: 100 }}
            /> */}
            <Text>{character.name}</Text>
        </View>
    )
}

export default Character
