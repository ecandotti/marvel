import React from "react"
import styled from "styled-components"
import IonIcons from "react-native-vector-icons/Ionicons"
IonIcons.loadFont()

export const TextInput = ({ icon, placeholder, value, onChangeText, color, secureTextEntry }) => (
    <View color={color}>
        <IconContainer>
            <IonIcons name={icon} size={18} />
        </IconContainer>
        <TextInputContainer
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            color={color}
            secureTextEntry={secureTextEntry}
        />
    </View>
)

const View = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    background-color: ${(props) => (props.color ? props.color : "white")};
`

const IconContainer = styled.View`
    margin-right: 10px;
`

const TextInputContainer = styled.TextInput`
    flex: 1;
    border: 1px solid ${(props) => (props.color ? props.color : "white")};
    border-radius: 5px;
    background-color: ${(props) => (props.color ? props.color : "white")};
    color: black;
`
