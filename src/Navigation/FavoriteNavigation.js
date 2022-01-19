import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoriteScreen from "../Screen/FavoriteScreen";

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Favorites'
                component={FavoriteScreen}
                options={{ title: "Favoritos" }}
            />
        </Stack.Navigator>
    );
};

export default FavoriteNavigation;
