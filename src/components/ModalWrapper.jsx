import React, { useContext } from "react"
import Modal from "react-native-modal"
import { View, Text, Button } from "react-native"

import AuthContext from "../configs/contexts/AuthContext"

const ModalWrapper = ({ text }) => {
    const { isOffline, setIsOffline } = useContext(AuthContext)

    return (
        <View>
            <Modal isVisible={isOffline}>
                <View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 34, fontWeight: "bold" }}>{text}</Text>
                    <Button
                        title="Me faire foutre"
                        onPress={() => setIsOffline(false)}
                        style={{ color: "white", fontWeight: "bold" }}
                    />
                </View>
            </Modal>
        </View>
    )
}

export default ModalWrapper
