import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { lightGray } from './../colors';

export class CustomSubTitle extends Component{
  render(){
    return(
      <>
        <View style={{width:"100%"}}>  
          <Text style={styles.text}>Usaremos esses dados para gerenciar lembretes</Text>
          <Text style={styles.text}>e criar um avatar "adulto" para você!</Text>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize: 16,
    color: lightGray}
})