import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView, 
  Alert,
  ToastAndroid
} from "react-native"

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
export default class LoginScreen extends Component {

handleLogin=(email,password)=>{
  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("BottomTab");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
}
  render(){
    return(

      <KeyboardAvoidingView>
      <ImageBackground source={bgImage} style={styles.bgImage}>
      <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
            
          </View>

          <View style={styles.lowerContainer}>
            <TextInput
              style={styles.textinput}
              onChangeText={text => this.setState({ email: text })}
              placeholder={"Enter Email"}
              placeholderTextColor={"#FFFFFF"}
              autoFocus
            />
            <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={text => this.setState({ password: text })}
              placeholder={"Enter Password"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
            />
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => this.handleLogin(email, password)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
      
      
      
      
      </ImageBackground>
      </KeyboardAvoidingView>
      
    )
  }
}



const styles=StyleSheet.create({
bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  appName: {
    width: 130,
    height: 130,
    resizeMode: "contain"
  },
  appIcon: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    marginTop: 80
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
   textinput: {
    width: "75%",
    height: 55,
    padding: 10,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
    backgroundColor: "#5653D4"
  },
   lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },

 button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold"
  }



})
