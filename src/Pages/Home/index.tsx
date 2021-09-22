import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {stylesLink,stylesLinkImportantes,styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';

const LinkItem = (props:any)=>{
    return(
        <Text style={stylesLink.text}>{props.name}</Text>
    );
}

const LinksImportantes = ()=>{
    return(//Aqui dentro ficará o nosso JSX
        <View style={stylesLinkImportantes.container}>
            <LinkItem name="Home"/>
            <LinkItem name="Post"/>
            <LinkItem name="Videos"/>
            <LinkItem name="Photos"/>
            <LinkItem name="Community"/>
        </View>
    );
};

type HomeProps = NativeStackNavigationProp<StackNavigatorParamList,"Home">;

const Home = () => {

    const navigation = useNavigation<HomeProps>();

    function irParaTelaLogin(){
        navigation.navigate('Login');
    }

<<<<<<< HEAD
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={
                    require("../../assets/seta.png")
                    }>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../assets/ei_search.png")
                        }>
                    </Image>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        style={styles.textInput}
                        >

                    </TextInput>
                </View>
                <Image source={
                    require("../../assets/share.png")
                    }>
                </Image>  
            </View>
            <LinksImportantes />
            <StatusBar style="auto"  />
            <View style={styles.conteudoFacebook}>
                    <TouchableOpacity style={styles.meubotao} onPress={irParaTelaLogin}>
                    <Text style={styles.meubotaoTexto}>Ir para segunda tela</Text>
                    </TouchableOpacity>
            </View>
=======
const Home = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Image source={
            require("./src/assets/seta.png")
            }>
        </Image>
        <View style={styles.inputTextView}>
            <Image source={
                require("./src/assets/ei_search.png")
                }>
            </Image>
            <TextInput
                placeholder="Search"
                placeholderTextColor="#F5FFFF"
                style={styles.textInput}
                >

            </TextInput>
>>>>>>> parent of f3a1456... route.tsx funcionando
        </View>
        <Image source={
            require("./src/assets/share.png")
            }>
        </Image>
        
    </View>
      <LinksImportantes />
      <StatusBar style="auto" />
    </View>
  );
}
<<<<<<< HEAD
=======

const styles = StyleSheet.create({
  container: {
      flex:1,
  },
  header:{
      minHeight:93,
      backgroundColor: "#4369B0",
      paddingTop:40,
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:30,
  },
  inputTextView:{
      flex:1,
      backgroundColor:"#2C4877",
      height:40,
      marginHorizontal:10,
      alignItems: "center",
      borderRadius:28,
      flexDirection:"row"
  },
  textInput:{
      color:"#F5FFFF",
      // maxWidth:200
      flex:1,
      paddingRight:10,
  },
});
>>>>>>> parent of f3a1456... route.tsx funcionando

export default Home;