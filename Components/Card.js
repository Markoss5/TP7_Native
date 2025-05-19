import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Alert } from "react-native";

const Foto_Perfil = require("../assets/Foto_Perfil.jpg");

export default function Card() {
  const [nombre, handleNombreChange] = React.useState("");
  const [backgroundColor, setBackgroundColor] = useState("rgba(255, 255, 255, 0.71)");

  const handlePress = () => {
    setBackgroundColor("rgba(0, 143, 57, 0.71)"); 
  };

  return (
    <View style={[styles.View, { backgroundColor }]}>
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

      <Pressable
        style={styles.button}
        onPress={handlePress} 
      >
        <Text style={styles.buttonText}>Ver Portfolio</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
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
    marginTop: "1%",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
