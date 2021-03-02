import React, { Component } from 'react';
import { Platform, SafeAreaView, ScrollView,View, Text, StatusBar, KeyboardAvoidingView,TextInput, TouchableOpacity, Button, Dimensions, Image, ImageBackground, ViewComponent, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { Theme } from '../Constants/Color'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import Signup from './Signup';
import Snackbar from 'react-native-snackbar';
import Home from '../Components/Fooder';
import Chat from './Chat';
import { Modal, ModalContent } from 'react-native-modals';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      Username:'',
      name:'',
      Password:'',
      visible:false,
      //   name:'',
      //   email:'',
      //   photo:'',
      //   givenname:'',
      //   familyname:'',
      //  id:''
      ActiveScreen: 'Login'

    }
  }

  container(Route) {
    if(Route === "Home"){
      if(this.state.Username == "Harish" && this.state.Password == "1234"){
        this.props.navigation.navigate("Home")
      }
      else{
      if(this.state.Username == "" && this.state.Password == ""){
        Snackbar.show({
          text: 'Enter Username and Passwored..!',
          
      });}
       else if(this.state.Username == ""){
        Snackbar.show({
          text: 'Enter UserName..!',
          
      });
       }
      else if(this.state.Password == ""){
        Snackbar.show({
          text: 'Enter Password..!',
          backgroundColor:'red',
          textColor:'#000'
      });
      }
      
       
        else  {
          Snackbar.show({
            text: 'Wrong user id Password ..!',
            
        });
        }
      }
      
      
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
      webClientId: '855323298668-mrtjj0ndmt79sql165qm8vu703i7ckd6.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

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
      <ImageBackground source={require('../Assets/Background_Image2.jpg')} style={{ height:h,width:w, position:'absolute' ,left:0,top:0}}>
      <View style={{ flex: 1, }}>
        {this.state.ActiveScreen === 'Login' ?
        
            <KeyboardAvoidingView style={{flex:1}} behavior='height' keyboardVerticalOffset={30} enabled>
               
            <TouchableWithoutFeedback onPres={Keyboard.dismiss} >
            
              {/* <View style={{ flex: 0.04, backgroundColor: '#000' }} ></View> */}
              <View style={{ flex: 1, }}>

                <ScrollView style={{}}>
                
                  <View style={{ flex: 0.1, padding: w / 100 * 2 }}></View>
                  <View style={{ flex: 0.3, }}>
                    <View style={{ flex: 0.7, padding: w / 100 * 13, }}><Text style={{ color: '#fff' }}>{this.state.user.email}</Text></View>
                    <View style={{ flex: 0.3, }}>
                      <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}> Welcome to Sayhi!</Text>
                      </View>
                      <View style={{ flex: 0.6, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', color: '#fff' }}> sign in to continue</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ flex: 1, padding: w / 100 * 7 }} />
                  <View style={{ flex: 0.4, }}>
                    <View style={{ flex: 0.4, flexDirection: 'row' }}>
                      <View style={{ flex: 0.1, padding: w / 100 * 2, }} />
                      <View style={{ flex: 0.1, justifyContent: 'center', }} >
                        <Image source={require('../Assets/user.png')} style={{ width: w / 100 * 5, height: w / 100 * 5, tintColor: '#fff' }} />
                      </View>
                      <View style={{ flex: 0.8, padding: w / 100 * 2 }} >
                        <TextInput placeholder='Username'
                          ref='username'
                          returnKeyType='next'
                          color='#fff'
                          placeholderTextColor='#fff'
                          onSubmitEditing={() => this.ref.password.foucs()}
                          onChangeText={ (Username) => this.setState({Username})
                        }
                          
                          style={{ height: w / 100 * 10, borderBottomColor: '#fff', borderBottomWidth: 1 }} />
                      </View>
                      <View style={{ flex: 0.1, padding: w / 100 * 2 }} />
                    </View>
                    <View style={{ flex: 1, padding: w / 100 * 2 }} />
                    <View style={{ flex: 0.4, flexDirection: 'row' }}>
                      <View style={{ flex: 0.1, padding: w / 100 * 2, }} />
                      <View style={{ flex: 0.1, justifyContent: 'center' }} >
                        <Image source={require('../Assets/key.png')} style={{ width: w / 100 * 5, height: w / 100 * 5, tintColor: '#fff' }} />
                      </View>
                      <View style={{ flex: 0.8, padding: w / 100 * 2, }} >
                        <TextInput
                          color='#fff'
                          ref='password'
                          placeholder='Password'
                          secureTextEntry={true}
                          placeholderTextColor='#fff'
                          onChangeText={(Password)=>this.setState({Password})}
                          onSubmitEditing={() => this.container("Login")}
                          style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
                      </View>
                      <View style={{ flex: 0.1, padding: w / 100 * 2 }} />
                    </View>
                    <View style={{ flex: 1, padding: w / 100 * 6 }} />
                    <View style={{ flex: 0.2, alignItems: 'center' }}>
                      <Text style={{ color: '#fff' }}>forgot password </Text>
                    </View>
                  </View>
                  <View style={{ flex: 0.1, padding: w / 100 * 10, }}></View>
                  <View style={{ flex: 0.1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.4, padding: w / 100 * 5, }} />
                    <View style={{ flex: 0.2, shadowOpacity: 1 }} >
                      <TouchableOpacity onPress={()=>this.container("Home")}>
                        <LinearGradient
                          colors={['#002B81', '#75A1F8']} start={{ x: 0.3, y: 0.5 }} end={{ x: 1.4, y: 0.5 }} style={{ height: h / 100 * 8, width: h / 100 * 8, backgroundColor: '#fff', borderRadius: w * h / 2, justifyContent: 'center', alignItems: 'center', }}>

                          <Image source={require('../Assets/right-arrow.png')} style={{ width: w / 100 * 6, height: w / 100 * 6, tintColor: '#fff' }} /></LinearGradient>
                      </TouchableOpacity>


                    </View>


                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }} >
                    <View style={{ flex: 0.5, padding: w / 100 * 5, justifyContent: 'center', alignItems: "center" }} >
                      <TouchableOpacity onPress={this.signIn}>
                        <Image style={{ height: w / 100 * 12, width: w / 100 * 12 }} source={require('../Assets/google.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', }} >
                    <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
                    </View>
                  </View>
                  <View style={{ flex: 1, paddingTop: w / 100 * 4 }} />
                  <View style={{ flex: 0.4, alignItems: 'center', }} ><TouchableOpacity onPress={() => this.props.navigation.navigate(Signup)}>
                    <Text style={{ fontSize: 17, fontWeight: '500', color: '#63646D' }}>
                      {"Dont have account?"} <Text style={{ color: '#75A1F8' }}>SIGN UP</Text></Text></TouchableOpacity>
                  </View>
                 
                 
                  <Text style={{ color: '#fff' }}>{this.state.user.email}</Text>
                  <Text style={{ color: '#fff' }}>{this.state.user.name}</Text>
                  <Text style={{ color: '#fff' }}>{this.state.user.id}</Text>
                </ScrollView>

              </View> 
              
            </TouchableWithoutFeedback>
           
            </KeyboardAvoidingView>
           
         : null}
         
      </View>
      </ImageBackground> 


    );
  }
}


export default App;



