import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import auth from '@react-native-firebase/auth'
import GoogleLoginBtn from '../components/GoogleLoginBtn'
import FacebookLoginBtn from '../components/FacebookLoginBtn'
import PhoneAuthBtn from '../components/PhoneAuthBtn'
import EmailPassLoginBtn from '../components/EmailPassLoginBtn'



function LoginView(props) {
    

    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [logged, setLogged] = useState(false)

    

    

    return (
        <KeyboardAvoidingView
            style={styles.containerView} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Text style={styles.logoText}>Firebase Signing In Page</Text>
                    <TextInput placeholder="Username" /* placeholderColor="#c4c3cb"  */ style={styles.loginFormTextInput} onChangeText={(text) => setEmail(text)} />
                    <TextInput placeholder="Password" /* placeholderColor="#c4c3cb" */ style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(text) => setPass(text)} />
                </View>
            </TouchableWithoutFeedback>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <EmailPassLoginBtn mail={Email} pass={Pass} />
                <Text onPress={() => props.navigation.navigate('SignUp')}
                    style={{ fontWeight: 'bold' }}>SignUp</Text>
            </View>

            <PhoneAuthBtn />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 20 }}>
                <GoogleLoginBtn color='red' />
                <FacebookLoginBtn />
            </View>


        </KeyboardAvoidingView>
    );
}

export default LoginView;

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    loginScreenContainer: {
        flex: 1,
    },
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
    loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
    fbLoginButton: {
        height: 45,
        marginTop: 10,
        backgroundColor: 'transparent',
    },

})