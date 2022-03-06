import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Favorites from "./Favorites"
import Characters from "./Characters"
import Search from "./Search"

const Tab = createBottomTabNavigator()

const Index = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Characters" component={Characters} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    )
}

export default Index
