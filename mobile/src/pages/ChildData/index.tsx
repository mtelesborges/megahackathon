import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform, TextInput, ScrollView, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker, { Event }  from '@react-native-community/datetimepicker';
import {FontAwesome5} from '@expo/vector-icons';
import {white, lightGray, green, darkGray} from './../../colors';
import RNPickerSelect from 'react-native-picker-select';

import { CustomHeader }  from './../../components/Header';
import { CustomTitle } from './../../components/Title';
import { CustomSubTitle } from './../../components/SubTitle';
import { Avatar } from './../../components/Avatar'
import { Loader } from '../../components/Loader';

const ChildData = () => {

  const [date, setDate] = useState<Date>(new Date());
  const [formatedDate, setFomatedDate] = useState<String>();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [nome, setNome] = useState<string>();
  const [dataNascimento, setDataNascimento] = useState<string>();
  const [serieEscolar, setSerieEscolar] = useState<string>();
  const [plataformaAtividades, setPlataformaAtividades] = useState<string>();
  const [loginArvore, setLoginArvore] = useState<string>();

  const postChild = () => {
    if(!nome || !dataNascimento || !serieEscolar || !plataformaAtividades || loginArvore){
      Alert.alert('Preencha todos os campos!');
      return;
    }
    setLoading(true);
  }

  const onChange = (event: Event, date: Date) => {
    
    setShow(Platform.OS === 'ios');
    setDate(date);
    
    if(!date)
      return;

    const formatedDate = String("00" + date?.getDate()).slice(-2) + '/' + String("00" + date?.getMonth()).slice(-2) + '/' + date?.getFullYear();
    setFomatedDate(formatedDate);
    setDataNascimento(formatedDate);
  };

  const seriesEscolars = [
    {
      label: 'Fundamental 1',
      value: 'Fundamental 1'
    },
    {
      label: 'Fundamental 2',
      value: 'Fundamental 2'
    },
    {
      label: 'Ensino Médio',
      value: 'Ensino Médio'
    }
  ]

  const plataformas = [
    {
      label: 'Árvore Livros',
      value: 'Árvore Livros'
    }
  ]

  return (
    <>
      <Loader loading={loading}/>
      <ScrollView
        style={{
          backgroundColor: white,
          paddingTop: 40,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 20,
        }}
      >
        <CustomHeader navigation={useNavigation()}/>
        <CustomTitle tiltle={'Dados da criança'} subtitle={'(passo 2 de 3)'}/>
        <CustomSubTitle/>
        <View style={{width: "100%"}}>
          <View style={{ width: "100%", borderBottomColor: darkGray, borderBottomWidth: 0.5, marginTop: 20}}>
            <Text style={{color: lightGray}}>Nome ou apelido da Criança</Text>
            <TextInput  style={{lineHeight: 20}} onChangeText={(nome) => setNome(nome)}/>
          </View>
          <View style={{ width: "100%", borderBottomColor: darkGray, borderBottomWidth: 0.5, marginTop: 20}}>
            <Text style={{marginBottom: 3, color: lightGray}}>Data de nascimento</Text>
            <View style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
              <TouchableOpacity activeOpacity={0.6} style={{width: "10%"}}>
                <FontAwesome5 name="calendar" color={darkGray} onPress={() => setShow(true)}/>
              </TouchableOpacity>
              <Text style={{width: "90%", lineHeight: 30}} onPress={() => setShow(true)}>{formatedDate}</Text>
              {show && (<DateTimePicker 
                testID="dateTimePicker"
                value={date}
                date={date} //initial date from state
                mode="date" //The enum of date, datetime and time
                onChange={onChange}
                display="calendar"
              />)}
            </View>
          </View>
          <View style={{ width: "100%", borderBottomColor: darkGray, borderBottomWidth: 0.5, marginTop: 20}}>
            <Text style={{color: lightGray}}>Série escolar</Text>
            <RNPickerSelect
              onValueChange={(serieEscolar) => { setSerieEscolar(serieEscolar) }}
              items={seriesEscolars}
              style={{
                inputAndroid:{
                  height: 35
                },
                inputIOS:{
                  height: 35
                }
              }}
            />
          </View>
          <View style={{ width: "100%", borderBottomColor: darkGray, borderBottomWidth: 0.5, marginTop: 20}}>
            <Text style={{color: lightGray}}>Faz atividades virtuais por:</Text>
            <RNPickerSelect
              onValueChange={(plataformaAtividades) => {setPlataformaAtividades(plataformaAtividades)}}
              items={plataformas}
              style={{
                inputAndroid:{
                  height: 35
                },
                inputIOS:{
                  height: 35
                }
              }}
            />
          </View>
          <View style={{ width: "100%", borderBottomColor: darkGray, borderBottomWidth: 0.5, marginTop: 20, marginBottom: 20}}>
            <Text style={{color: lightGray}}>Login/Usuário na Árvore de Livros</Text>
            <TextInput  style={{lineHeight: 20}} onChangeText={(loginArvore) => setLoginArvore(loginArvore)}/>
          </View>
          <Avatar title={'Defina seu avatar'}/>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              marginTop: 10,
              backgroundColor: green,
              height: 50,
              width: "100%",
              borderRadius: 5,
              alignItems:"center", 
              justifyContent: "center"
            }}
            onPress={postChild}
          >
            <Text style={{color: white}}>Avançar</Text>
          </TouchableOpacity>
          <View style={{height: 100}}/>
        </View>
        </ScrollView>
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
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  }
})

export default ChildData;