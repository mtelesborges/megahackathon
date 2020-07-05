import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { white, darkGray, dark, blue } from './../../colors';

const Welcome = () => {

  const baseImage = './../../../assets';
  const navigation = useNavigation();

  const handleCreateSmallMoth = () => {
    navigation.navigate('Responsible');
  }

  return (
    <>
      <View style={styles.main}>
          <Image source={require(`${baseImage}/header-logo.png`)}/>
          <View style={styles.text}>
            <Text style={{fontSize:25, color: darkGray}}>Olá! Precisamos conectar</Text>
            <Text style={{fontSize:25, color: darkGray}}>algumas coisas antes</Text>
            <Text style={{fontSize:25, color: darkGray}}>de começar!</Text>
          </View>
          <Image source={require(`${baseImage}/img-primeiro-acesso.png`)}/>
          <TouchableOpacity onPress={handleCreateSmallMoth} style={styles.button}>
            <Text style={{color: white, fontSize: 20, fontWeight: "700"}}>Criar tracinha(s)!</Text>
          </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: white,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo:{
    alignItems: "center"
  },
  text:{
    alignItems: "center"
  },
  button:{
    width: "100%",
    backgroundColor: blue,
    height: 70,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 1.0,
    elevation: 4
  }
})

export default Welcome;