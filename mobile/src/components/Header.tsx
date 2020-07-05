import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {dark} from './../colors';
import { NavigationProp } from '@react-navigation/native';

export class CustomHeader extends Component<{navigation: NavigationProp<any>}>{

  render(){
    const baseImage = './../../assets';
    
    return (
      <View style={{width: "100%", display:"flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.goBack()}>
          <FontAwesome5 size={25} color={dark} name="chevron-left"/>
        </TouchableOpacity>
        <Image source={require(`${baseImage}/header-logo.png`)}/>
        <View/>
      </View>
    )
  }
}
