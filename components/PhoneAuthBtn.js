import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth';

function PhoneAuthBtn(props) {

    const [confirm, setConfirm] = useState(null)
    const [code, setCode] = useState('')
    const [mobileNum, setMobilenum] = useState('')

    const onPhoneButtonPress = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(mobileNum);
            setConfirm(confirmation)
        }
        catch (err) {
            Alert.alert(err.toString())

        }
    }

    const confirmCode = async () => {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('error is', error);
        }
    }


    return (
        !confirm ?
            <View style={{ margin: 20, marginTop: 0 }}>
                <TextInput placeholder="Enter Phone Number   eg +201000340243" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => setMobilenum(text)} />
                <Button
                    color='green'
                    title="Phone Number Sign In"
                    onPress={() => mobileNum ? onPhoneButtonPress() : null}
                />
            </View> :
            <View style={{ margin: 20, marginTop: 0 }}>
                <TextInput value={code} onChangeText={(text) => setCode(text)} placeholder='confirm code' />
                <Button color='green' title="Confirm Code" onPress={() => confirmCode()} />
            </View>
    )

}


export default PhoneAuthBtn;


const styles = StyleSheet.create({

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