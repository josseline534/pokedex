import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PokedexScreen from "../Screen/PokedexScreen";
import PokemonScreen from "../Screen/PokemonScreen";

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Pokedex'>
            <Stack.Screen
                name='Pokedex'
                component={PokedexScreen}
                options={{
                    title: "",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Pokemon'
                component={PokemonScreen}
                options={{ title: "", headerTransparent: true }}
            />
        </Stack.Navigator>
    );
};

export default PokedexNavigation;
