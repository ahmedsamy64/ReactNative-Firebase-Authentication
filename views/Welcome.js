import React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin';

function Welcome(props) {


    const logout = () => {
        GoogleSignin.revokeAccess();
        auth().signOut()
    }
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }} >
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text>You Have Successfully Login</Text>
                <Button title='Logout' onPress={() => logout()} />

            </View>
        </KeyboardAvoidingView>
    );
}

export default Welcome;