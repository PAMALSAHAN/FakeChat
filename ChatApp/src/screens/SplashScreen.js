import React, {useEffect} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import Color from '../util/Colors'
import Images from '../const/Images'
import Constants from '../const/Constants'
import firebase from '../firebase/Firebase'


function SplashScreen({navigation}){
    
    useEffect(()=> {
        NavigateToAuthORGroupScreen()
    }, [navigation])

    function NavigateToAuthORGroupScreen(){
        
        setTimeout(function (){

            firebase.auth().onAuthStateChanged((user) => {
                if (user != null){
                    navigation.reset({
                        index:0,
                        routes: [{name: 'GroupsScreen'}]
                    })
                }else{
                    navigation.reset({
                        index:0,
                        routes: [{name: 'SignInScreen'}]
                    })
                }
            })

        },1000)
    }
    

return(
    <View style = {styles.constainer}>
        <Image style = {styles.logo} source = {Images.chatApp}></Image>
    </View>
)

}

const styles = StyleSheet.create({
   
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Color.theme
    },
    logo: {

        alignSelf: 'center',
        margin: 0.04 * Constants.screenHeight,
        width: 150,
        height: 150,
    }
})

export default SplashScreen