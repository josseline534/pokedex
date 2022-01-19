import React from "react";
import {
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Platform,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemon, isNext }) => {
    const loadMore = async () => {
        loadPokemon();
    };
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator
                        size='large'
                        style={styles.spinner}
                        color='#AEAEAE'
                    />
                )
            }
        />
    );
};

const styles = StyleSheet.create({
    flatListContentContainer: {
        padding: 5,
        marginTop: Platform.OS === "android" ? hp("2%") : 0,
    },
    spinner: {
        marginTop: hp("5%"),
        marginBottom: hp("10%"),
    },
});

export default PokemonList;
