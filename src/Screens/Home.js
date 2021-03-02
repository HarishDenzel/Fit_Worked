import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fooder from '../Components/Fooder'
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.07, backgroundColor: '#1a1a1a', borderBottomWidth: 2 }}></View>
                <View style={{ flex: 0.86 }}>
                    <ScrollView style={{ backgroundColor: '#1a1a1a' }}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Chat")}>
                        <View style={{ height: w / 100 * 2, }} />
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ marginLeft: w / 100 * 2 }} />
                            <View style={{ height: h / 100 * 9, width: h / 100 * 9, backgroundColor: 'white', borderRadius: w, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../Assets/Profile.jpg')} style={{ height: w / 100 * 12, width: w / 100 * 12, resizeMode: 'cover' }} />
                            </View>
                            <View style={{ flex: 0.7, paddingLeft: w / 100 * 2 }}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '900', color: '#fff' }}>{"Harish Denzel🔥"}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 0.2, backgroundColor: '#ff4747', borderRadius: w / 100 * 5, flexDirection: 'row', }}>
                                        <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../Assets/user2.png')} style={{ height: w / 100 * 3, width: w / 100 * 3, tintColor: '#fff' }} />
                                        </View>
                                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                                            <Text style={{ fontSize: 13, fontWeight: '600', color: '#fff' }}>{"21"}</Text>
                                        </View>

                                    </View>
                                    <View style={{ flex: 0.015 }} />


                                    <View style={{ width: w / 100 * 5, borderRadius: w, }}>
                                        <Image source={require('../Assets/check.png')} style={{ height: w / 100 * 4, width: w / 100 * 4, }} />
                                    </View>

                                </View>
                                <View style={{ flex: 1 ,justifyContent:'flex-end'}}>
        <Text style={{color:'#e4e4e4'}}>{"Hi there"}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.3, }}>
                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '600', color: '#6e6e6e' }}>{"21/02/21"}</Text>
                                </View>
                                <View style={{ flex: 0.5, }}>

                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, borderBottomWidth: 0.4, borderColor: '#6e6e6e', marginTop: w / 100 * 2 }} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{ flex: 0.07 ,borderWidth:1}}>
                    <Fooder />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({


})