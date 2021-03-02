// @refresh reset

import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, TextInput, View, YellowBox, Button } from 'react-native'
import * as firebase from 'firebase'

import 'firebase/firestore'

const firebaseConfig = {
    
    apiKey: "AIzaSyDPoKk0ODzlDrr9TzzKceV-PpSWOvCKi1I",
    authDomain: "facebook-303706.firebaseapp.com",
    projectId: "facebook-303706",
    storageBucket: "facebook-303706.appspot.com",
    messagingSenderId: "855323298668",
    appId: "1:855323298668:web:94a201d11bd96517ab4149",
    measurementId: "G-LC9MSDHRWC"
      
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default function App() {
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        readUser()
        const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    //createdAt is firebase.firestore.Timestamp instance
                    //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])

    const appendMessages = useCallback(
        (messages) => {
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        [messages]
    )

    async function readUser() {
        const user = await AsyncStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }
    async function handlePress() {
        const _id = Math.random().toString(36).substring(7)
        const user = { _id, name }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }
    async function handleSend(messages) {
        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
                <Button onPress={handlePress} title="Enter the chat"  />
            </View>
        )
    }
    return <GiftedChat messages={messages} user={user} onSend={handleSend} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
})

// import React, { Component } from 'react';
// import { Platform, AsyncStorage,SafeAreaView, ScrollView, View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
// import{Giftchat} from 'react-native-gifted-chat'
// import Fire from '../Components/Fire'
// const w = Dimensions.get('screen').width;
// const h = Dimensions.get('screen').height;


// export default class Home extends Component {
//     state={
//         messages:[]
//     }
//     get user(){
//         return{
//         _id:Fire.uid,
//         name: this.props.navigation.state.parms.name
//         }
//     }
//     componentDidMount(){
//         Fire.get(messages => this.setState(previous =>({
//             messages:Giftchat.append(previous.messages,messages)
//         })))
//     }
//     componentWillUnmount(){
//         Fire.off();
//     }
//     render() {
//         const chat =<Giftchat messages={this.state.messages} onSend={Fire.send} user={this.user}/>
//         if(Platform.os === "android"){
//             return(
//             <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
//              {chat}
//             </KeyboardAvoidingView>
//             )
//         }
//     return<SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
//     }
// }