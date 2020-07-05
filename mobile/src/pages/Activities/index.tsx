import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { white, darkGray, lightGray } from './../../colors';
import { CustomHeader } from '../../components/Header';

const Activities = () => {
  
  const baseImage = './../../../assets';
  const navigation = useNavigation();

  return(
    <>
      <SafeAreaView style={styles.main}>
        <View style={{alignItems: "center", flexDirection:"row"}}>
            <Image source={require(`${baseImage}/ic-settings.png`)}/>
          <View style={{width: "100%", alignItems:"center"}}>
            <Image source={require(`${baseImage}/header-logo.png`)}/>
            <Text style={{color: lightGray, marginTop: 5}}>Selecione uma tracinha para começar!</Text>
          </View>
        </View>
        <Image source={require(`${baseImage}/referencia.png`)}/>
        <Text style={{fontSize: 30, color: darkGray, fontWeight: "700", textAlign:"center"}}>Atividades da semana</Text>
        <View>
          <TouchableOpacity style={{
            flexDirection: "row",
            display:"flex",
            justifyContent:"space-between",
            alignItems: "center",
            height: 30,
            borderRadius: 5,
            backgroundColor:"#D1A1CF",
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 5,
            paddingRight: 5,
            marginBottom: 5
          }}>
            <Text style={{color: white}}>LUIZA</Text>
            <Text style={{color: white}}>2 atividades escolares</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flexDirection: "row",
            display:"flex",
            justifyContent:"space-between",
            alignItems: "center",
            height: 30,
            borderRadius: 5,
            backgroundColor:"#38BED7",
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 5,
            paddingRight: 5,
            marginBottom: 5
          }}>
            <Text style={{color: white}}>Pedro</Text>
            <Text style={{color: white}}>fazer 1 atividade no app</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 30, color: darkGray, fontWeight: "700", textAlign:"center"}}>Sugestão da semana</Text>
        <TouchableOpacity style={{
            flexDirection: "row",
            display:"flex",
            justifyContent:"space-between",
            alignItems: "center",
            height: 30,
            borderRadius: 5,
            backgroundColor:"#38BED7",
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 5,
            paddingRight: 5,
            marginBottom: 5
          }}
            activeOpacity={0.6}
          >
            <Text style={{color: white}}>CRIANÇAS</Text>
            <Text style={{color: white}}>criar uma história juntos</Text>
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
    justifyContent: "space-between"
  },
  logoContainer:{
    width: "100%",
    alignItems: "center",
    paddingTop: 85
  },
})

export default Activities;