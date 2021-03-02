import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Theme } from "../Constants/Color/Theme"

import Moment from 'moment';


const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeScreen: 'home',
            Date_Picker: false,
            Date_Visible: '',
            Current_Date: ''
        }
        // }
        // Screen(Route) {
        //     this.setState({ activeScreen: Route })

        // }
    }
    showDatePicer = () => {
        this.setState({ Date_Picker: true });
    }
    hideDatePicer = () => {
        this.setState({ Date_Picker: false });
    }
    handleConfirm = (date) => {

        this.setState({ Current_Date: Moment(date).format('DD/MM/YYYY') })

        this.hideDatePicer();
    }

    render() {

        const { Date_Picker } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1, paddingTop: w / 100 * 6 }} />
                    <View style={{ flex: 0.2, flexDirection: 'row' }}>
                        <View style={{ flex: 0.02, }} />
                        <View style={{ flex: 0.96, }}>
                            <View style={{ flex: 0.2, }}>

                                <View style={styles.Container_Textinput}>
                                    <View style={{ flex: 0.2, }}>

                                    </View>
                                    <View style={{ flex: 0.8, justifyContent: 'center' }}>
                                        <TextInput placeholder='   Username' fontSize={w / 100 * 4} selectionColor={"#000"} placeholderTextColor={Theme.PLACEHOLDER_COLOR} style={{}} />
                                    </View>

                                </View>

                            </View>

                            <View style={{ flex: 0.2, backgroundColor: '#fff', }}>

                            </View>

                        </View>


                        <View style={{ position: 'absolute', bottom: w / 100 * 0.15, left: w / 100 * 0.08 }}>
                            <Image source={require('../Assets/App.png')} style={{ height: w / 100 * 14.5, width: w / 100 * 14.5, tintColor: '#3D93D7', top: w / 100 * 1.8 }} />
                        </View>
                        <View style={{ position: 'absolute', left: w / 100 * 5.2, top: w / 100 * 2.5 }}>
                            <Image source={require('../Assets/user2.png')} style={{ height: w / 100 * 5, width: w / 100 * 5, tintColor: '#fff', }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingTop: w / 100 * 6 }} />
                    <View style={{ flex: 0.2, backgroundColor: 'white', flexDirection: 'row' }}>
                        <View style={{ flex: 0.02, }} />
                        <View style={{ flex: 0.96, backgroundColor: '#fff', }}>
                            <View style={{ flex: 0.2, backgroundColor: '#fff', }}>

                                <View style={styles.Container_Textinput}>
                                    <View style={{ flex: 0.2, }}>

                                    </View>
                                    <View style={{ flex: 0.8, justifyContent: 'center' }}>
                                        <TextInput placeholder='   Email' fontSize={w / 100 * 4} selectionColor={"#000"} placeholderTextColor={Theme.PLACEHOLDER_COLOR} style={{}} />
                                    </View>

                                </View>

                            </View>

                            <View style={{ flex: 0.2, backgroundColor: '#fff', }}>

                            </View>

                        </View>


                        <View style={{ position: 'absolute', bottom: w / 100 * 0.15, left: w / 100 * 0.08 }}>
                            <Image source={require('../Assets/App.png')} style={{ height: w / 100 * 14.5, width: w / 100 * 14.5, tintColor: '#3D93D7', top: w / 100 * 1.8 }} />
                        </View>
                        <View style={{ position: 'absolute', left: w / 100 * 5.2, top: w / 100 * 2.5 }}>
                            <Image source={require('../Assets/gmail.png')} style={{ height: w / 100 * 5, width: w / 100 * 5, tintColor: '#fff', }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingTop: w / 100 * 6 }} />
                    <View style={{ flex: 0.2, backgroundColor: 'white', flexDirection: 'row' }}>
                        <View style={{ flex: 0.02, }} />
                        <View style={{ flex: 0.96, backgroundColor: '#fff', }}>
                            <View style={{ flex: 0.2, backgroundColor: '#fff', }}>

                                <View style={styles.Container_Textinput}>
                                    <View style={{ flex: 0.2, }}>

                                    </View>
                                    <View style={{ flex: 0.8, justifyContent: 'center' }}>
                                        <TextInput placeholder='   DD/MM/YYY' fontSize={w / 100 * 4} selectionColor={"#000"} placeholderTextColor={Theme.PLACEHOLDER_COLOR} style={{}} />
                                    </View>

                                </View>

                            </View>

                            <View style={{ flex: 0.2, backgroundColor: '#fff', }}>

                            </View>

                        </View>

                        <View style={{ position: 'absolute', bottom: w / 100 * 4, left: w / 100 * 88 }} >
                            {/* <Button title="show date" onPress={this.showDatePicer} /> */}
                            <TouchableOpacity onPress={this.showDatePicer}>
                                <Image source={require('../Assets/crown.png')} style={{ height: w / 100 * 6, width: w / 100 * 6, top: w / 100 * 1.8 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute', bottom: w / 100 * 0.15, left: w / 100 * 0.08 }}>
                            <Image source={require('../Assets/App.png')} style={{ height: w / 100 * 14.5, width: w / 100 * 14.5, tintColor: '#3D93D7', top: w / 100 * 1.8 }} />
                        </View>
                        <View style={{ position: 'absolute', left: w / 100 * 5.2, top: w / 100 * 2.5 }}>
                            <Image source={require('../Assets/crown1.png')} style={{ height: w / 100 * 5, width: w / 100 * 5, tintColor: '#fff', }} />
                        </View>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


                        <DateTimePickerModal
                            isVisible={Date_Picker}
                            mode='date'
                            onConfirm={this.handleConfirm}
                            onCancel={this.hideDatePicer}
                        />
                    </View>
                    <View style={{ flex: 1, paddingTop: w / 100 * 6 }} />




                </ScrollView>
            </View>
        );
    }
}
export default Signup;
const styles = StyleSheet.create({
    Container_Textinput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        height: w / 100 * 11,
        borderRadius: w / 100 * 5,
        flexDirection: 'row'
    }

})