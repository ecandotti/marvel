import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import IonIcons from "react-native-vector-icons/Ionicons"
IonIcons.loadFont()

import Favorites from "./Favorites"
import Characters from "./Characters"
import Settings from "./Settings"

const Tab = createBottomTabNavigator()

const Index = () => {
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

export default Index
