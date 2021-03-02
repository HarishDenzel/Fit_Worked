import React, { component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Screens/Login.js';
import Signup from '../../Screens/Signup.js';
import Home from '../../Screens/Home'
import Chat from '../../Screens/Chat'

import { StyleSheet } from 'react-native';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name='Login' component={Login} headerStyle options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={Signup} options={{ title: 'Member', headerStyle: { backgroundColor: '#3D93D7' }, headerTintColor: '#fff' }} />
                <Stack.Screen name='Home' component={Home}  />
                <Stack.Screen name='Chat' component={Chat}  />
                <Stack.Screen name='Chat' component={Chat}  />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;