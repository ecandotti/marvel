import { View, TextInput } from "react-native"
import React from "react"

const Search = ({ customSearch, setCustomSearch }) => {
    return (
        <View style={{ borderWidth: 1, padding: 10 }}>
            <TextInput placeholder="IronMan" value={customSearch} onChangeText={(e) => setCustomSearch(e)} />
        </View>
    )
}

export default Search
