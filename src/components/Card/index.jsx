import React, { useContext } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import IonIcons from "react-native-vector-icons/Ionicons"

import MarvelContext from "../../configs/contexts/MarvelContext"

const Card = ({ item: { name, thumbnail, id }, navigation, item }) => {
    const { addOrRemoveToFavList, favList } = useContext(MarvelContext)

    const isFav = favList.filter((favItem) => favItem.id === id)

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
                    {isFav.length !== 0 ? (
                        <IonIcons name="heart" size={16} />
                    ) : (
                        <IonIcons name="heart-outline" size={16} />
                    )}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default Card
