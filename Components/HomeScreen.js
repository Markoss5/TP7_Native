import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

const imgFondo = require("../assets/FondoPantalla.jpg");
const Perfil = {
  uri: "https://cdn-icons-png.flaticon.com/512/12225/12225881.png",
};

export default function HomeScreen() {

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ImageBackground
        source={imgFondo}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Image source={Perfil} style={styles.profileImage} />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  profileImage: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },

  button: {
    backgroundColor: "#008f39",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    marginLeft: "5%",
    borderColor: "#020000",
  },
});
