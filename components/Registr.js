import { useState, useCallback } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { signup } from "../src/firebaseApi/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registr = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = useCallback(async () => {
        try {
          const { data } = await signup(email, password);
      
          await AsyncStorage.setItem("user-id", data.localId);
        } catch (error) {
          console.log("Error", error);
        }
      }, [email, password]);

    return (
        <View style={styles.Game}>
            <View style={styles.question}>
                <Text style={styles.question_element}>Регистрация</Text>
            </View>
            <TextInput
                editable
                placeholder='Login'
                textAlign='center'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input} />
            <TextInput
                editable
                placeholder='Password'
                textAlign='center'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input} />
            <TouchableOpacity style={styles.button_exit}
                onPress={() => {
                    signUp(email, password);
                }}>
                <Text style={styles.button_text}>Registrate!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_exit}
                onPress={() => {
                    navigation.navigate('Login')
                }}>
                <Text style={styles.button_text}>Login</Text>
            </TouchableOpacity>
        </View>

    )
}
export default Registr;

const styles = StyleSheet.create({

})