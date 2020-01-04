import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import {
  Icon,
  InputGroup,
  Button,
  Container,
  Header,
  Input,
  Item,
  Content,
} from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

// 하단의 탭과 연결할 컴포넌트들

import HomeTab from './AppTabNavigator/HomeTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: { screen: HomeTab },
    ProfileTab: { screen: ProfileTab },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios: {
            backgroundColor: 'white',
          },
        }),
      },
      iconStyle: { height: 100 },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true,
    },
  }
);

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      header: (
        <View style={styles.view1}>
          <Header
            searchBar
            rounded
            style={styles.header1}>
            <TextInput
              placeholder="search"
              style={styles.textInput1}
            />
            <Button
              onPress={this.CheckTextInput}
              style={styles.button1}>
              <Icon name="ios-search" />
            </Button>
          </Header>
        </View>
      )
      }
  }

  render() {
    return <AppTabContainet />;
  }
}

const styles=StyleSheet.create({
  view1: {
    flex: 1, 
    paddingTop: 10
  },
  header1: {
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: 'white',
  },
  textInput1: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#EDEEF1',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  button1: {
    backgroundColor: '#F64945',
    paddingLeft: -20,
    paddingRight: -20,
  },
});
