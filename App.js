import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeScreen from './Components/HomeScreen';
import { SafeAreaView } from 'react-native';
import Card from './Components/Card';
const imgFondo = require('./assets/FondoPantalla.jpg')

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }} >
    <StatusBar style="light"/>
    <ImageBackground 
    source = {imgFondo}
    resizeMode='cover'
    style = {styles.backgroundImage}
    >
      <Card

      />

    </ImageBackground>
    </View>
</SafeAreaView>
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
  },


});
