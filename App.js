import * as React from 'react';
import * as Font from 'expo-font';
import { Text, View, StyleSheet, Image, Platform, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './components/MainScreen';
import Constants from 'expo-constants';
import Index from './components/Index';
import SearchScreen from './components/SearchScreen';
import { Card } from 'react-native-paper';

const AppStackNavigator = createStackNavigator(
  {
  Main:{
    screen: Index
  },
  Search:{
    screen: SearchScreen
  },
  Second:{
    screen: MainScreen
  }
});

export default createAppContainer(AppStackNavigator)
