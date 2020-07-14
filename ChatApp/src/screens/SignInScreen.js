import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

import Button from '../components/Button'
import String from '../const/String'
import EmailTextField from '../components/EmailTextField'
import PasswordTextField from '../components/PasswordTextField'


function SignInScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Sign In Screen </Text>
            <Button title={String.Join}  ></Button>
            
            <EmailTextField></EmailTextField>
            <PasswordTextField></PasswordTextField>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ebebeb',
    },
    text:{
        color:'#101010',
        fontSize:24,
        fontWeight:'bold'
    },

})

export default SignInScreen
