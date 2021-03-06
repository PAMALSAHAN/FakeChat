import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Alert, SafeAreaView, Image, KeyboardAvoidingView, ImageBackground } from 'react-native'

import Button from '../components/Button'
import String from '../const/String'
import EmailTextField from '../components/EmailTextField'
import PasswordTextField from '../components/PasswordTextField'
import Color from '../util/Colors'
import Images from '../const/Images'
import Constants from '../const/Constants'
import DismissKeyboard from '../components/DismissKeyboard'
import Utility from '../util/Utility'

import Strings from '../const/String'

import firebase from '../firebase/Firebase'


function SignInScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isLoading, setIsLoading] = useState('')

    //check karanawa email eka valid da kiyala. 
    validateEmailAddress = () => {
        const isValidEmail = Utility.isEmailValid(email);
        isValidEmail ? setEmailError('') : setEmailError(String.InvalidEmailAddress)
        return isValidEmail
    }

    //password validation
    validatePasswordField = () => {
        const isValid = Utility.isValidField(password);
        isValid ? setPasswordError('') : setPasswordError(String.PasswordFieldEmpty);
        return isValid
    }

    //registration
    registration = (email, password) => {
        try {
            setIsLoading(true)
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    setIsLoading(false)
                    Alert.alert("Logged In")
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'GroupsScreen' }]
                    })

                }).catch(error => {

                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => {
                            setIsLoading(false)
                            Alert.alert('Create New User')
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'GroupsScreen' }]
                            })
                        }).catch(error => {
                            setIsLoading(false)
                            console.log(error)
                            Alert.alert(error.message)
                        })
                })
        } catch (error) {
            setIsLoading(false)
            Alert.alert(error.message)
        }
    }

    //auth eka client side
    performAuth = () => {
        const isValidEmail = validateEmailAddress()
        const isValidPassword = validatePasswordField()
        if (isValidEmail && isValidPassword) {
            setEmailError('')
            setPasswordError('')
            registration(email, password)
        }
    }




    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
                <View>
                    <SafeAreaView>
                        <ImageBackground style={styles.logo} source={Images.chatApp} />
                        <EmailTextField
                            term={email}
                            error={emailError}
                            placeHolder={String.EmailPlaceHolder}
                            onTermChange={newEmail => setEmail(newEmail)}
                            onValidateEmailAddress={validateEmailAddress}

                        />
                        <PasswordTextField
                            term={password}
                            error={passwordError}
                            placeHolder={Strings.PasswordPlaceHolder}
                            onTermChange={newPassword => setPassword(newPassword)}
                            onValidatePasswordField={validatePasswordField}

                        />
                        <Button title={Strings.Join} onPress={performAuth} isLoading={isLoading} />

                    </SafeAreaView>
                </View>

            </KeyboardAvoidingView>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.smoke,

    },
    logo: {

        alignSelf: 'center',
        margin: 0.04 * Constants.screenHeight,
        width: 150,
        height: 150,
    }

})

export default SignInScreen
