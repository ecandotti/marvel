import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import IonIcons from "react-native-vector-icons/Ionicons"
IonIcons.loadFont()

import Characters from "../../screens/selfcare/Characters"
import Favorites from "../../screens/selfcare/Favorites"
import Settings from "../../screens/selfcare/Settings"

const Tab = createBottomTabNavigator()

const SelfcareStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Characters"
                component={Characters}
                options={{
                    tabBarIcon: ({ color, size }) => <IonIcons name="people-outline" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size }) => <IonIcons name="heart-outline" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) => <IonIcons name="settings-outline" color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    )
}

export default SelfcareStack
