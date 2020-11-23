import { GoogleSignin } from '@react-native-community/google-signin';
import React from 'react';
import { Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';

function EmailPassLoginBtn(props) {


    const Signin = () => {
        props.mail && props.pass ?
            auth().signInWithEmailAndPassword(props.mail, props.pass).catch((error) => Alert.alert(error.toString()))
            : null
    }

    return (
        <Button color='blue' title='login With Email and password' onPress={() => Signin()} />

    );
}

export default EmailPassLoginBtn;