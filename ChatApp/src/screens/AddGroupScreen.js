import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import CustomTextField from '../components/CustomTextField'
import Button from '../components/Button'
import Strings from '../const/String'
import Utility from '../util/Utility'
import firebase, { firestore } from '../firebase/Firebase'


function AddGroupScreen({ navigation }) {

    //use states needed 
    const [groupName, setGroupName] = useState('')
    const [fieldError, setFieldError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    //validate field
    validateField = () => {
        const isValidField = Utility.isValidField(groupName) //group name ka characters greater than 0
        isValidField ? setFieldError('') : setFieldError(Strings.GroupNameEmpty)
        return isValidField
    }

    function createGroupToFireBase() {
        setIsLoading(true)
        const groupsRef = firestore.collection("groups").doc()
        const userID = firebase.auth().currentUser.uid

        groupsRef.set({
            groupID: groupsRef.id,
            groupName: groupName,
            userID: userID,  //create karapu kenage group id eka ganna haduwe
        }).then(function (docRef) {
            setIsLoading(false)
            Alert.alert(Strings.GroupCreate)

            console.log('Document written with ID:', groupsRef.id)
            addMembersOfChatToFirebase(groupsRef.id, userID) // methanin ilamembersla call karanawa.

        }).catch(function (error) {
            Alert.alert(error.message)
            setIsLoading(false)
            console.error("error adding document: ", error)
        })
    }

    function addMembersOfChatToFirebase(groupId, userID) {
        const membersRef = firestore.collection("members").doc(groupId).collection('member').doc()
        membersRef.set({
            userID: userID
        }).then(function (docRef) {
            navigation.goBack()
        })
            .catch(function (error) {
                setIsLoading(false)
                console.error("Error adding document: ", error)
            })
    }

    performCreateGroup = () => {
        const isValidField = validateField()
        if (isValidField) {
            createGroupToFireBase()
        }
    }

    return (
        <View style={styles.container}>
            <CustomTextField
                term={groupName}
                error={fieldError}
                placeHolder={Strings.EnterYourGroupName}
                onTermChange={newGroupName => setGroupName(newGroupName)}
                onValidateTextField={validateField}
            />

            <Button title={Strings.CreateGroup} onPress={performCreateGroup} isLoading={isLoading} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default AddGroupScreen
