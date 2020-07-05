import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {darkGray} from './../colors';

export class CustomTitle extends Component<{tiltle: string, subtitle: string}>{
  render(){
    return(
      <>
        <View style={{width:"100%"}}>
          <Text style={styles.text}>{this.props.tiltle}</Text>
          <Text style={styles.text}>{this.props.subtitle}</Text>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize: 25,
    fontWeight: "700",
    color: darkGray
  }
})