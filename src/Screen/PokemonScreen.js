import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { getPokemonsDetailsApi } from "../Api/Pokemon";
import Header from "../Components/Pokemon/Header";
import Type from "../Components/Pokemon/Type";
import Stats from "../Components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

const PokemonScreen = ({ route: { params }, navigation }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerRigth: () => null,
            headerLeft: () => (
                <Icon
                    name='arrow-left'
                    color='#fff'
                    size={20}
                    style={{ marginLeft: 20 }}
                    onPress={() => navigation.goBack()}
                />
            ),
        });
    }, [navigation, params]);

    useEffect(() => {
        (async () => {
            await loadPokemon();
        })();
    }, [params]);

    const loadPokemon = async () => {
        try {
            const response = await getPokemonsDetailsApi(params.id);
            console.log(response);
            setPokemon(response);
        } catch (error) {
            navigation.goBack();
        }
    };

    if (!pokemon) return null;

    return (
        <ScrollView>
            <Header
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other["official-artwork"].front_default}
                type={pokemon.types[0].type.name}
            />
            <Type types={pokemon.types} />
            <Stats stats={pokemon.stats} />
        </ScrollView>
    );
};

export default PokemonScreen;
