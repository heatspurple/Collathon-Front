import React, { Component } from 'react';
import { View, Text, StyleSheet, Item, Image } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import * as VideoThumbnails from 'expo-video-thumbnails';
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
    <Icon name='ios-home' style={{ color: tintColor, paddingBottom: -25 }} />
    )
  }

  render() {
    return (
      <Container style={style.container}>
      <Content>
      <CardComponent />
      </Content>
      </Container>
      
    );
  }
}



      // <View style={style.view2}>
      //   <Text>HomeTab</Text>
      // </View>

const style = StyleSheet.create({
  view1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});