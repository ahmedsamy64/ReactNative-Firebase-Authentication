import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

function SignUp(props) {


    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const SignUpPressed = () => {

        auth().createUserWithEmailAndPassword(email, pass).then(() => props.navigation.navigate('Home')).then(() => Alert.alert('Successfully Signed Up')).catch((error) => Alert.alert(error.toString()))
    }



    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Text style={styles.logoText}>Signing up Page</Text>
                    <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => setEmail(text)} />
                    <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(text) => setPass(text)} />
                </View>
            </TouchableWithoutFeedback>
            <Button title='Sign Up' onPress={() => SignUpPressed()} />
        </>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    logoText: {
        fontSize: 20,
        fontWeight: "800",
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginHorizontal: 15,
        marginVertical: 5,

    },
})