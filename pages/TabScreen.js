import React from "react";
import { View, Text } from "react-native";

export default function TabScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Página Home Dev</Text>
        </View>
    );
}

const styles = {
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#750e49"
    },
    title:{
        fontsize: 20,
    },
};