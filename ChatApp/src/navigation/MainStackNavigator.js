import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import SignInScreen from '../screens/SignInScreen'
import GroupsScreen from '../screens/GroupsScreen'
import AddGroupScreen from '../screens/AddGroupScreen'
import ChatScreen from '../screens/ChatScreen'

const Stack =createStackNavigator()

function ChatFlow() {
    return(
        <NavigationContainer>
            <Stack.Navigator name="Chat">
                <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name="GroupsScreen"
                component={GroupsScreen}
                options={{title:"Groups"}}
                />
                <Stack.Screen
                name="AddGroupScreen"
                component={AddGroupScreen}
                options={{title:"Add Group"}}
                />
                <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{title:"Chats"}}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function MainStackNavigator(){
    return(
        ChatFlow()
    )
}

export default MainStackNavigator