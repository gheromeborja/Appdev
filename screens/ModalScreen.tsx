import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';




import { TouchableOpacity, TextInput, SafeAreaView, Alert} from 'react-native'
  
  
  class Inputs extends React.Component {
  
     state = {
        email: '',
        password: ''
     }
  
     setEmail = (text: any) => {
        this.setState({ email: text })
     }
  
     setPassword = (text: any) => {
        this.setState({ password: text })
     }
  
     login = (email: string, pass: string) => {
        alert( 'email: ' + email + ' password: ' + pass )
        
     }
  
     render() {
  
       
  
        return (
  
           <SafeAreaView  style = {styles.container}>

            <Image style={styles.image}  source={require("../logo.png")} />
   
            
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "  Enter Email"
                 placeholderTextColor = "black"
                 autoCapitalize = "none"
                 onChangeText = {this.setEmail}/>
              
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "  Enter Password"
                 placeholderTextColor = "black"
                 autoCapitalize = "none"
                 onChangeText = {this.setPassword}/>
              
              <TouchableOpacity  onPress={() => Alert.alert('SIGN UP FORM')}>
              <Text style={styles.title1}> SIGN UP </Text>
              
               </TouchableOpacity>
  
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.login(this.state.email, this.state.password)
                 }>
                 <Text style = {styles.submitButtonText}> Submit </Text>
              </TouchableOpacity>
  
           </SafeAreaView>
      
        )
     }
  }
  
  export default Inputs
  
  
  
  const styles = StyleSheet.create({
     container: {
        flex: 1,
        paddingTop: 180,
        alignItems: 'center',
     },
  
    welcome:{
     color: "white",
     fontSize: 20,
     lineHeight: 50,
     fontWeight: "bold",
     textAlign: "center",
     backgroundColor: "#000000c0"
    },
    image:{
      height:60,
      width:100,
      justifyContent: "center"
    },

    notice:{
      textAlign: "center",
      fontSize: 25,
      color: 'white',
      fontWeight: "bold",
    },
  
     input: {
        margin: 5,
        height: 40,
        width: 200,
        backgroundColor: (`#f5fffa`),
        borderColor: 'black',
        color: 'black',
        borderWidth: 1,
        borderRadius: 10
     },
     title2:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
  
     },
     title1:{
        textAlign: 'center',
        fontSize: 15,
  
     },
  
     submitButton: {
        backgroundColor: 'black',
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        margin: 15,
        width:  200,
        height: 40,
        borderRadius: 20,
  
     },
  
     submitButtonText:{
        color: 'white'
     }
  })