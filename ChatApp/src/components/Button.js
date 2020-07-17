import { StyleSheet, TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import Color from "../util/Colors";
import React from 'react'

const Button = (props) => {
    const { title = "Enter", style = {}, textStyle = {}, onPress, isLoading } = props;

    const loader = () => {
        return (
            <ActivityIndicator animating={isLoading} />
        )
    }

    const button = () => {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
                <Text style={[styles.text, textStyle]} >{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.button, style]}>

            {isLoading ? loader() : button()}

        </View>

    );
};

const styles = StyleSheet.create({
    button: {
        display: "flex",

        height: 50,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,

        backgroundColor: Color.black,
        shadowColor: Color.uaStudiosGreen,
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 10 },
        shadowRadius: 20,
    },

    text: {
        fontSize: 16,
        textTransform: "uppercase",
        color: Color.white,
    },
});

export default Button