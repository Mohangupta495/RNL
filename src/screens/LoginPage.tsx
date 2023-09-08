import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import ImagePath from '../assets/ImagePath';
import { windowHeight, windowWidth } from '../utils/WindowDimension';

const PhoneNumberAuthentication = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const handleSendCode = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber('+919368877221');
      setConfirmation(confirmation);
    } catch (error) {
      console.error('Send Verification Code Error:', error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      await confirmation.confirm(verificationCode);
      alert("login succesfully")
      // User is authenticated, navigate to the next screen
    } catch (error) {
      console.error('Verification Error:', error);
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar
    backgroundColor="white"
    barStyle="dark-content"/>    
    <Text style={styles.welcomeText}>
      Welcome To <Text style={styles.heroTextWelcome}>TakaShee</Text>
    </Text>
    <Text style={styles.welcomeTagLine}>Unlocking Digital Possibilities.</Text>
    <Text style={styles.welcomeTagLine}>Crafting Apps that Elevate Experiences.</Text>
    <Image source={ImagePath.loingHeroImage} style={styles.heroImage}/>
  <TouchableOpacity  onPress={()=>{}} style={styles.getStartedButton}><Text style={styles.getStartedButtonText}>
      Get Started
    </Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor:"white",
    height:windowHeight,
    paddingBottom:30,
    textAlign:"center"
  },
  heroImage:{
    width:"100%",
    height:"80%",
    marginLeft:20,
    // marginBottom:-160,
  },
  getStartedButton:{
    backgroundColor:'#6C63FF',
    padding:13,
    borderRadius:25,
    fontSize:30,
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center"
  },
  getStartedButtonText:{
    color:"white",
    fontSize:17,
    fontWeight:'400',
  },
  welcomeText:{
    fontSize:30,
    color:"black",
    marginTop:10,
    fontWeight:'800',
    width:windowWidth,
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    alignSelf:"center",
  },
  heroTextWelcome:{
    fontSize:33,
    color:"#6C63FF",
    marginTop:10,
    fontWeight:'800',
  },
  welcomeTagLine:{
    color:'#454545',
    width:windowWidth,
    textAlign:"center",
    marginTop:5,
  }
});

export default PhoneNumberAuthentication;
