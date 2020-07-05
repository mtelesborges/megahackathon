import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { white, lightGreen, black, darkGray, lightGray } from './../../colors';

import { CustomHeader } from '../../components/Header';

const History = () => {

  const navigation  = useNavigation();
  const baseImage = './../../../assets';
  return(
    <>
      <SafeAreaView style={styles.main}>
        <CustomHeader navigation={navigation}/>
        <View>
          <Text style={{fontSize: 30, color: darkGray, textAlign: "center", fontWeight: "700"}}>CRIAR HISTÓRIA</Text>
          <Text style={{fontSize: 20, color: lightGray, textAlign: "center"}}>Quem vai participar hoje?</Text>
        </View>
        <Image source={require(`${baseImage}/_participantes-2.png`)}/>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 30, color: white, fontWeight: "700"}}>Começar!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: white,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 50,
    justifyContent: "space-between",
    alignItems: "center"
  },
  button:{
    backgroundColor: lightGreen,
    height: 80,
    width: "100%",
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
})

export default History;