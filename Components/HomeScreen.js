import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import ProfileHeader from '/Components/ProfileHeader'
const imgFondo = require('../assets/FondoPantalla.jpg')
export default function HomeScreen() {
  return (
    <View style={styles.container}>    
    <ImageBackground 
    source = {imgFondo}
    resizeMode='stretch'
    style = {styles.backgroundImage}
    >
        
    </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',      
    },
  
    backgroundImage:{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    }
  });