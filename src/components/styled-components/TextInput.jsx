import React from "react"
import styled from "styled-components"

export const TextInput = (props) => <TextInputContainer {...props} />

const TextInputContainer = styled.TextInput`
    margin: 10px 0;
    padding: 15px 30px;
    border: 1px solid #dfe6e9;
    border-radius: 10px;
    background-color: ${(props) => (props.color ? props.color : "white")};
    color: black;
`
