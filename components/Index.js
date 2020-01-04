import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Index extends React.Component {
  static navigationOptions = {
    header: null
  };
  // 헤더부분 Nav-bar 안보이게 하기
  render() {
    return (
      <LinearGradient colors={['#080D13', '#2B2E3D']} style={{ flex:1, alignItems: 'center' }}>
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Search')}>
       <Image 
       style={{
         height: 180, width: 170, 
         justifyContent: "center", 
         alignItems: "center"
         }} 
       resizeMode="contain" 
       source={require('../assets/images/trender_logo_white.png')} />
      </TouchableOpacity>
      </View>
      </LinearGradient>
    );
  }
}