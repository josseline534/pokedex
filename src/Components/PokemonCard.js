import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import getColorPokemonByType from "../Utils/getColorPokemonByType";

const PokemonCard = ({ pokemon }) => {
    const navigation = useNavigation();
    const pokemonColor = getColorPokemonByType(pokemon.type);
    const bgStyle = {
        backgroundColor: pokemonColor,
        ...styles.bgStyles,
    };

    const goToPokemon = () => {
        navigation.navigate("Pokemon", { id: pokemon.id });
    };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyle}>
                        <Text style={styles.number}>
                            {" "}
                            #{`${pokemon.order}`.padStart(3, 0)}{" "}
                        </Text>
                        <Text style={styles.name}>
                            {capitalize(pokemon.name)}
                        </Text>
                        <Image
                            style={styles.image}
                            source={{ uri: pokemon.image }}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: hp("40%"),
        width: wp("100%"),
        marginTop: hp("3%"),
    },
    spacing: {
        padding: hp("1%"),
        flex: 1,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: hp("2%"),
    },
    image: {
        position: "absolute",
        top: hp("1%"),
        left: wp("23%"),
        width: wp("18%"),
        height: hp("30%"),
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        top: hp("25%"),
        fontSize: hp("5%"),
    },
    number: {
        position: "absolute",
        left: wp("40%"),
        top: hp("27%"),
        color: "#fff",
        fontSize: hp("5%"),
    },
});

export default PokemonCard;
