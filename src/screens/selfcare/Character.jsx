import React from "react"
import { Text, Image } from "react-native"

import { Container } from "../../components/styled-components"

const Character = ({ route }) => {
    const { character } = route.params

    return (
        <Container>
            <Image
                source={{ uri: `${character?.thumbnail.path}.${character?.thumbnail.extension}` }}
                style={{ width: 100, height: 100 }}
            />
            <Text>{character?.name}</Text>
        </Container>
    )
}

export default Character
