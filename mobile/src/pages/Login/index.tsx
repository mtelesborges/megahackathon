import React, { useEffect, useState } from 'react';

import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { yellow, orange, white, black } from './../../colors';

const Login = () => {

  const baseImage = './../../../assets';
  const navigation = useNavigation();

  const handleLoginFacebook = () => {
    navigation.navigate('SocialAuth');
  }

  const handleLoginGoogle = () => {
    navigation.navigate('SocialAuth');
  }

  const handleLoginPhoneNumber = () => {
    navigation.navigate('Responsible');
  }

  return (
    <>
      <View style={styles.main}>
        <View style={styles.logoContainer}>
          <Image source={require(`${baseImage}/login-bg-logo.png`)}/>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.socialsButtonsContainer}>
            <TouchableOpacity onPress={handleLoginFacebook} style={styles.socialButton} activeOpacity={0.6}>
              <Image source={require(`${baseImage}/icon-face.png`)}/>
              <Text style={{paddingLeft: 10}}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLoginGoogle} style={styles.socialButton} activeOpacity={0.6}>
              <Image source={require(`${baseImage}/icon-google.png`)}/>
              <Text style={{paddingLeft: 10}}>Google</Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 20, marginBottom: 20}}>Ou</Text>
          <TouchableOpacity onPress={handleLoginPhoneNumber} style={styles.phoneNumberButton} activeOpacity={0.6}>
            <Text style={{color: "#FFFFFF"}}>Logar com número do celular</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <Image source={require(`${baseImage}/login-bg-livros.png`)}/>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: yellow,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "space-between"
  },
  logoContainer:{
    width: "100%",
    alignItems: "center",
    paddingTop: 85
  },
  buttonsContainer:{
    alignItems: "center"
  },
  socialsButtonsContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
    width: "100%"
  },
  socialButton:{
    width: "40%",
    backgroundColor: white,
    height: 40,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 1.0,
    elevation: 4
  },
  phoneNumberButton:{
    width: "100%",
    backgroundColor: orange,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    display:"flex",
    borderRadius: 5,
    elevation: 4
  },
  bookContainer:{
    alignItems: "center"
  }
})

export default Login;