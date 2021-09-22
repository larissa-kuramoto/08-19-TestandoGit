import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LinkItem = (props:any)=>{
    return(
        <Text style={stylesItens.text}>{props.name}</Text>
    );
}
const stylesItens = StyleSheet.create({
    text:{
        backgroundColor:"#FFFFFF",
        marginTop:20,
        marginLeft: 18,
        color: '#4A4A4C',
        fontSize: 13.71,
        width: 378,
        height: 48,
    }
});


const Itens = ()=>{
    return(//Aqui dentro ficará o nosso JSX
        <View style={stylesItens.container}>
            <LinkItem name="Email"/>
            <LinkItem name="Password"/>
        </View>
    );
};

const StylesItens = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal:40,
        paddingVertical:10,

        borderBottomColor:"#F0F0F0",
        borderBottomWidth:1,

    }
});

const Login = () => {
    return(
        <View style={styles.container}>
               
                <View style={styles.inputTextView}>
                <Image source={
                    require("../../assets/facebook.png")
                    }>
                </Image>
                    <TextInput
                        placeholderTextColor="#F5FFFF"
                        style={styles.textInput}
                        >
                    </TextInput>
                </View>
            <Itens/>
            <StatusBar style="auto"  />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    inputTextView:{
        flex:1,
        backgroundColor:"#2C4877",
        height:100,
        alignItems: "center",
        borderRadius:20,
        flexDirection:"row"
    },
    textInput:{
        color:"#F5FFFF",
        // maxWidth:200
        flex:1,
        paddingRight:10,
    },
});
export default Login;