import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomHeader } from '../../components/Header';
import { white, lightGray, darkGray } from '../../colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Child = () => {

  const navigation = useNavigation();
  const baseImage = './../../../assets';

  return(
    <>
      <SafeAreaView style={styles.main}>
        <CustomHeader navigation={navigation}/>
        <View>
          <Text style={{textAlign: "center", color: darkGray, fontSize: 35}}>da LUIZA</Text>
          <Image source={require(`${baseImage}/btn-customizar.png`)} style={{position: "absolute", right: 0}}/>
        </View>
        <View style={{flexDirection: "row", display:"flex",  marginBottom: 30}}>
          <View style={{justifyContent: "space-between", paddingTop: 25, paddingBottom: 25, width: "40%", alignItems: "center"}}>
            <Image source={require(`${baseImage}/btn-comida.png`)}/>
            <Image source={require(`${baseImage}/btn-brincar-inativo.png`)}/>
          </View>
          <View style={{width: "60%", alignItems: "center"}}>
            <Image source={require(`${baseImage}/luiza-grande.png`)}/>
          </View>
        </View>
        <View>
          <View style={{flexDirection: "row", display: "flex", justifyContent: "space-between", marginBottom: 30}}>
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={require(`${baseImage}/btn-criar-historia.png`)}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={require(`${baseImage}/btn-minhas-historias.png`)}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row", display: "flex", justifyContent: "space-between"}}>
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={require(`${baseImage}/btn-livros.png`)}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={require(`${baseImage}/btn-atividades.png`)}/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: white,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 50,
    justifyContent: "space-between"
  }
})

export default Child;