import React from 'react';

import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { black, white, darkBlue, lightGray, dark } from './../../colors';

const SocialAuth = () => {
  
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate('Login');
  }
  
  const handleWelcome = () => {
    navigation.navigate('Login');
  }

  return(
    <>
      <View style={styles.main}>
        <View style={styles.buttonsContainer}>
          <Text style={{marginBottom: 15, color: lightGray}}> <Feather name="lock"/> This does not let the app post to Facebook.</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancel} activeOpacity={0.6} onPress={handleGoBack}>
              <Text style={{color: lightGray, fontSize: 18}} >Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ok} activeOpacity={0.6} onPress={handleWelcome}>
              <Text style={{color: white, fontSize: 18}}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: white,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between"
  },
  buttonsContainer:{
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    left: 15,
    width: "100%"
  },
  buttons:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%"
  },
  ok:{
    borderRadius: 5,
    height: 60,
    width: "47.5%",
    backgroundColor: darkBlue,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  cancel:{
    borderRadius: 5,
    height: 60,
    width: "47.5%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: lightGray
  }
})

export default SocialAuth;