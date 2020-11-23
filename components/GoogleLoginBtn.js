import React from 'react';
import { Button, Alert } from 'react-native'
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

function GoogleLoginBtn(props) {

    GoogleSignin.configure({
        //place you webCliend from google-services.json here
        webClientId: '134165743344-ie0i3vebugekrs7ctknlbkd0eem4e7ef.apps.googleusercontent.com',
      })

    return (
        <Button color={props.color} title='Google Login'
            onPress={() => onGoogleButtonPress()} />
    );
}

const onGoogleButtonPress = async () => {
    try {// Get the users ID token
        const { idToken } = await GoogleSignin.signIn()

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }
    catch (error) {
        console.log(error)
    }
}


export default GoogleLoginBtn;