import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';

import { white, darkGray, dark, orange, black, lightGray } from '../../colors';

import { CustomHeader }  from './../../components/Header';
import { CustomTitle } from './../../components/Title';
import { CustomSubTitle } from './../../components/SubTitle';
import { Avatar } from './../../components/Avatar'
import { Loader } from './../../components/Loader'

import {ResponsibleService} from './../../services/resposible';
import {IResponsible} from './../../models/responsible';

const Responsible = () => {

  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const postResponsible = async () =>{

    if(!name || !phoneNumber){
      Alert.alert('Preencha nome e telefone.');
      return
    }
    
    const responsible = new ResponsibleService();
    setLoading(true);
    await responsible
      .post({name, phoneNumber})
      .then(
        (response) => {
        setTimeout(() => {
          setLoading(false);
        }, 100);
        setTimeout(() => {
          navigation.navigate('ChildData')
        }, 250);
        
      })
      .catch((response) => {
        setLoading(false);
        Alert.alert('Erro ao efetuar o cadastro.')
      })
  }
  return (
    <>
      <Loader loading={loading}/>
      <View style={styles.main}>
        <CustomHeader navigation={useNavigation()}/>
        <CustomTitle tiltle={'Dados do responsável'} subtitle={'(passo 1 de 3)'}/>
        <CustomSubTitle/>
        <AppLoading />
        <View style={{width:"100%"}}>
          {/* <Text style={{fontSize: 12, color: lightGray, lineHeight: 30}}>Nome (pode ser seu nome ou "pai", "mãe", etc)</Text> */}
          <TextInput
            placeholder='Nome (pode ser seu nome ou "pai", "mãe", etc)'
            style={{
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 3,
              paddingBottom: 3,
              width: "100%",
              fontSize: 15,
              borderBottomWidth: 0.5,
              borderBottomColor: lightGray,
              marginBottom: 10,
            }}
            onChangeText={(name) => {
              setName(name)
            }}
          >
          </TextInput>
          <TextInput
            textContentType="telephoneNumber"
            placeholder="Número do celular"
            style={{
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 3,
              paddingBottom: 3,
              width: "100%",
              fontSize: 15,
              borderBottomWidth: 0.5,
              borderBottomColor: lightGray,
              marginBottom: 10
            }}
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </View>
        <Avatar title={'Defina seu avatar'}/>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            backgroundColor: orange,
            height: 50,
            width: "100%",
            borderRadius: 5,
            alignItems:"center",
            justifyContent: "center"
          }}
          onPress={postResponsible}  
        >
          <Text style={{color: white}}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
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
  }
})

export default Responsible;