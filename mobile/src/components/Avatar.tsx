import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { lightGray, black, dark } from './../colors';

const baseImage = './../../assets';

export class Avatar extends Component<{title: string}>{
  render(){
    return (
      <>
        <View style={{width:"100%"}}>
          <Text style={{fontSize: 12, color: lightGray}}>{this.props.title}</Text>
        </View>
        <View style={{display: "flex", width: "100%", flexDirection: "row"}}>
          <View style={{borderColor: black, borderWidth: 2, borderRadius: 5, width: "50%", alignItems:"center"}}>
            <Image source={require(`${baseImage}/bicho-inteiro.png`)}/>
          </View>
          <View style={{width: "50%", paddingLeft: "10%"}}>
            <View>
              <Text style={{color: lightGray, width: "100%"}}>Formato do rosto</Text>
              <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-left"/>
                </TouchableOpacity>
                <Text>Lhama</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-right"/>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{color: lightGray, width: "100%"}}>Olhos</Text>
              <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-left"/>
                </TouchableOpacity>
                <Text>Simples 1</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-right"/>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{color: lightGray, width: "100%"}}>Naris e boca</Text>
              <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-left"/>
                </TouchableOpacity>
                <Text>Tipo 3</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-right"/>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{color: lightGray, width: "100%"}}>Cor do corpo</Text>
              <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-left"/>
                </TouchableOpacity>
                <Text>Aqua</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-right"/>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{color: lightGray, width: "100%"}}>Cor dos aneis</Text>
              <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-left"/>
                </TouchableOpacity>
                <Text>Azul-claro</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <FontAwesome5 size={25} color={dark} name="chevron-right"/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </>
    )
  }
}