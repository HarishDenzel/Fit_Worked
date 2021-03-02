import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity, Button, Dimensions, Image, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { Theme } from '../Constants/Color'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
// import Signup from './Signup';
import Navigation from './src/Route/Stack/Navigation'


const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
      //   name:'',
      //   email:'',
      //   photo:'',
      //   givenname:'',
      //   familyname:'',
      //  id:''
    }
  }


  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // alert(JSON.stringify(userInfo))
      this.setState({ user: userInfo.user })
      // console.log({userInfo})
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('Sign in cancelled')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('code in seriv')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert(hash)
      } else {
        console.warn(retry)
      }
    }
  };


  componentDidMount() {

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '565682163168-qfauvrprkbgf0ehertc84m2f62u47d4o.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });






  }
  
  render() {


    return (



<View style={{flex:1}}>
<Navigation />
</View>

    );
  }
}


export default App;



