import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import React from "react";
import { Alert } from "react-native";
import { Pressable } from "react-native";
import { useState } from "react";

const Foto_Perfil = require("../assets/Foto_Perfil.jpg");

export default function Card() {
  const [nombre, handleNombreChange] = React.useState("");
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.View}>
      <Image source={Foto_Perfil} style={styles.Image}></Image>
      <Text style={styles.titleText}>Marco Di Carlo</Text>
      <Text style={styles.subtitleText}>
        Desarrollador fullStack de apps webs y moviles
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su mensaje"
        onChangeText={handleNombreChange}
        value={nombre}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Mensaje enviado", nombre)}
      >
        <Text style={styles.buttonText}>Contactar</Text>
      </TouchableOpacity>
      <Pressable onPress={handlePress}>
      <Text>Ver Portfolio</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: "rgba(255, 255, 255, 0.71)",
    width: "75%",
    marginLeft: "12.5%",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },

  Image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },

  titleText: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    lineHeight: 40,
    color: "black",
  },

  subtitleText: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 30,
    color: "black",
  },

  input: {
    height: 40,
    borderWidth: 2,
    padding: 1,
    borderRadius: 10,
    textAlign: "center",
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#ffffff",
    marginBottom: 15,
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
    borderColor: "020000",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
