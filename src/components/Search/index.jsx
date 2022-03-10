import React from "react"
import { TextInput } from "../styled-components"

const Search = ({ customSearch, setCustomSearch }) => {
    return (
        <TextInput
            icon="search-outline"
            placeholder="IronMan"
            value={customSearch}
            onChangeText={(e) => setCustomSearch(e)}
        />
    )
}

export default Search
