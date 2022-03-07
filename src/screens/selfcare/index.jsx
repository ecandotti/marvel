import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Favorites from "./Favorites"
import Characters from "./Characters"
import Settings from "./Settings"

const Tab = createBottomTabNavigator()

const Index = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Characters" component={Characters} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default Index
