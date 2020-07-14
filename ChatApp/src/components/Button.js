import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Color from "../util/Colors"; 
import React from 'react'

const button = (props) => {
    const { title = "Enter", style = {}, textStyle = {}, onPress } = props;

    return (
    <TouchableOpacity onPress={onPress} style={[styles.button , style]}>
        <Text style={[styles.text, textStyle]} >{title}</Text>
    </TouchableOpacity>
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
    marginLeft: 20,

    backgroundColor: Color.uaStudiosGreen,
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

export default button