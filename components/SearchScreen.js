import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert, AlertOptions } from 'react-native';
import * as Font from 'expo-font';
import { Icon, InputGroup, Button, Container, Header, Input } from 'native-base';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    Font.loadAsync({
      'NotoSans_Trender': require('../assets/fonts/NotoSansMonoCJKkr-Regular.ttf')
    });
  }

  render() {
    return (
      <View style={{ 
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom: 250
        }}>
        <Text style={{
          alignItems: 'center',
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 34,
          fontWeight: 'bold',
          color: 'black',
        }}>TRENDER</Text>
        <InputGroup resizeMode="stretch" style={{ 
            alignItems: 'center', 
            justifyContent: 'center',
            paddingTop: 10,
            width: 380,
            }} >
          <Input 
          placeholder="" 
          onChangeText={TextInputName => this.setState({ TextInputName })}
          style={{ 
            alignItems: 'center', 
            justifyContent: 'center',
            borderWidth: 1, 
            borderRadius: 20,
            borderColor: '#EDEEF1',
            }} />
          <Button onPress={()=>this.props.navigation.navigate('Second')} 
          style={{ 
            backgroundColor: '#F64945' 
            }}>
            <Icon name="ios-search"  />
          </Button>
        </InputGroup>
      </View>
    );
  }

  CheckTextInput = () => {
    if (this.state.TextInputName != '' ) {
      if (this.state.TextInputName != null ) {
        Alert.alert("경고", "성공");
      } else {
        Alert.alert("경고", '검색어를 좀 입력하세요! 영진아!!!');
      }
    } else {
      Alert.alert("경고", '검색어를 좀 입력하세요! 영진아!!!');
    }  
  };
}