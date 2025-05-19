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
const imgFondo = require("../assets/FondoPantalla.jpg");
const Perfil = {
  uri: "https://cdn-icons-png.flaticon.com/512/12225/12225881.png",
};
export default function HomeScreen() {
  
  const [backgroundColor, setBackgroundColor] = useState('transparent'); 
  const changeBackgroundToBlack = () => {
    setBackgroundColor('black'); 
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgFondo}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Image source={Perfil} style={styles.profileImage}></Image>

        <Pressable
          style={styles.button}
          onPress={changeBackgroundToBlack} // Cambiar el fondo cuando se presiona
        >
          <Text style={styles.buttonText}>Ver Portfolio</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    flex: 1,
    borderRadius: 100,
    width: 50,
    heigth: 50,
  },
});
