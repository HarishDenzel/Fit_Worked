import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import Chat from "../Screens/Chat"
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, shadowOpacity: 0.2, backgroundColor: '#1a1a1a', borderTopWidth: 1, borderColor: '#333333', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.Bottom_Button}>
                    <View style={styles.Bottom_Container}>
                       <Image source={require('../Assets/find.png')} style={styles.Img_Style} />
                    </View>
                </TouchableOpacity>

                <View style={styles.Space_Line} />

                <TouchableOpacity onPress={()=>props.navigation.navigate("Chat")} style={styles.Bottom_Button}>
                    <View style={styles.Bottom_Container}>
                        <Image source={require('../Assets/chat.png')} style={styles.Img_Style} />
                    </View>
                </TouchableOpacity>

                <View style={styles.Space_Line} />

                <TouchableOpacity style={styles.Bottom_Button}>
                    <View style={styles.Bottom_Container}>
                        <Image source={require('../Assets/shield.png')} style={styles.Img_Style} />
                    </View>
                </TouchableOpacity>

                <View style={styles.Space_Line} />

                <TouchableOpacity style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.Bottom_Container}>
                        <Image source={require('../Assets/user2.png')} style={styles.Img_Style} />
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    Bottom_Container: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center'

    },
    Bottom_Button: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
Img_Style:{
    height: w / 100 * 7,
    width: w / 100 * 7, 
    tintColor: '#fff',

},
Space_Line:{
    flex: 0.002, 
    backgroundColor: '#333333' 
},


})