import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { BackHandler, ImageBackgroundBase, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
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
        </View>
        <Image source={
            require("./src/assets/share.png")
            }>
        </Image>
        
    </View>
      <Text>Taylor Swift IS the music industry</Text>
      <StatusBar style="auto" />
    </View>
  );
}

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
