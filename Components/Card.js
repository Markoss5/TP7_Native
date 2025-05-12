import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native"

import Foto_Perfil from '../assets/Foto_perfil.jpg'
export default function Card() {
    return (
        <View 
        
        style = {styles.View}
        
        >   
            
            <Image 
            source={Foto_Perfil}
            style = {styles.Image}
            ></Image>
            <Text style= {styles.titleText}>
                Marco Di Carlo
            </Text>
        </View>
    );
  }

const styles = StyleSheet.create({

    
    View:{
        
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '75%',
        marginLeft: '12.5%',
        borderRadius: 10,
    },
    
    Image:{
        borderRadius: 100,
        width: '10',
        heigth: '10',
    },
    titleText: {
        fontWeight: 'bold',         // Negrita
        fontSize: 32,              // Tamaño grande, tipo H1
        textAlign: 'center',       // Centrado
        lineHeight: 40,            // Espacio entre líneas (ajústalo si necesitas)
        color: 'black',            // Puedes cambiar el color si quieres
      }

})