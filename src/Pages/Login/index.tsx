import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';


type LoginProps = NativeStackNavigationProp<StackNavigatorParamList, "Login">;

const Login = () => {
    const navigation = useNavigation<LoginProps>();

    function IrparaHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Facebook</Text>
            <View style={styles.header}>

                <Image style={styles.foto}
                    source={require("../../assets/facebook.png")}>
                </Image>
            </View>

            <TextInput
                secureTextEntry
                placeholder="Email"
                style={styles.infos}
            > </TextInput>

            <TextInput
                secureTextEntry
                placeholder="Password"
                style={styles.infos}
            > </TextInput>

            <StatusBar style="auto" />

            <TouchableOpacity style={styles.botaologin} onPress={IrparaHome}>
                <Text style={styles.botaologinTexto}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.signup}>Sign Up for Facebook</Text>
        </View>

    );
}

export default Login;