import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Component
} from 'react-native';
import { HomeScreen } from '../app/screen/homepage/Home'
import MainApp from '../app/screen/MainApp'


const AppNavigator = createStackNavigator({
  Home: {
    screen: MainApp,
    navigationOptions: {
      header: null,
    },
  },
});

export const AppContainer = createAppContainer(AppNavigator);
