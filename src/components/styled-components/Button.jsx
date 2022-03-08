import React from "react"
import styled from "styled-components"

export const Button = ({ title, onPress, bgColor }) => (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
)

const ButtonContainer = styled.TouchableOpacity`
    margin: 10px 0;
    padding: 15px 30px;
    border: 1px solid ${(props) => (props.bgColor ? props.bgColor : "black")};
    border-radius: 10px;
    background-color: ${(props) => (props.bgColor ? props.bgColor : "black")};
`
const ButtonText = styled.Text`
    font-weight: bold;
    text-align: center;
    color: white;
    font-size: 16px;
`
