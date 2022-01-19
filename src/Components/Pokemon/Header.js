import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { capitalize } from "lodash";
import getColorPokemonByType from "../../Utils/getColorPokemonByType";
const Header = ({ name, order, type, image }) => {
    const color = getColorPokemonByType(type);
    const bgStyle = [
        {
            backgroundColor: color,
            ...styles.bgStyle,
        },
    ];
    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>
                        #{`${order}`.padStart(3, 0)}
                    </Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    bgStyle: {
        width: "100%",
        height: 500,
        position: "absolute",
        borderBottomEndRadius: 100,
        borderBottomLeftRadius: 100,
        transform: [{ scaleY: 2 }],
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 27,
    },
    order: {
        color: "#fff",
        fontWeight: "bold",
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 16,
    },
    image: {
        width: 250,
        height: 170,
        resizeMode: "contain",
    },
});

export default Header;
