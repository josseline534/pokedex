import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { map, capitalize } from "lodash";
import getColorPokemonByType from "../../Utils/getColorPokemonByType";
import { getPokemonsDetailsApi } from "../../Api/Pokemon";
const Type = ({ types }) => {
    //console.log("-------->", type);
    return (
        <View style={styles.content}>
            {map(types, (item, index) => (
                <View
                    key={index}
                    style={[
                        styles.pill,
                        {
                            backgroundColor: getColorPokemonByType(
                                item.type.name
                            ),
                        },
                    ]}
                >
                    <Text>{capitalize(item.type.name)}</Text>
                </View>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    text: {},
});

export default Type;
