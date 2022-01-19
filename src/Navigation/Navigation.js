import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image, StyleSheet } from "react-native";

import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    height: 0,
                },
            }}
        >
            <Tab.Screen
                name='FavoriteNavigation'
                component={FavoriteNavigation}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='heart'
                            color={color}
                            size={size}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='PokedexNavigation'
                component={PokedexNavigation}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderPokeball(),
                }}
            />
            <Tab.Screen
                name='AccountNavigation'
                component={AccountNavigation}
                options={{
                    tabBarLabel: "Mi cuenta",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='user'
                            color={color}
                            size={size}
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

renderPokeball = () => {
    return (
        <Image
            source={require("../Assets/pokeball.png")}
            style={styles.imagePokeball}
        />
    );
};

const styles = StyleSheet.create({
    imagePokeball: {
        width: 75,
        height: 75,
        top: -17,
    },
});
export default Navigation;
