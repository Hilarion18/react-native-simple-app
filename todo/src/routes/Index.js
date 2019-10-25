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
import TaskAdd from '../app/screen/stack/TaskAdd'
import TaskEdit from '../app/screen/stack/TaskEdit'
import TodoScreen from '../app/screen/todo/Todo'


const AppNavigator = createStackNavigator({
  Home: {
    screen: MainApp,
    navigationOptions: {
      header: null,
    },
  },
  TaskAdd: {
    screen: TaskAdd,
    navigationOptions: {
      header: null,
      title: 'TaskAdd'
    }
  },
  TaskEdit: {
    screen: TaskEdit,
    navigationOptions: {
      header: null,
      title: 'TaskEdit'
    }
  },
  TodoScreen: {
    screen: TodoScreen,
    navigationOptions: {
      header: null,
      title: 'TodoScreen'
    }
  }
});

export const AppContainer = createAppContainer(AppNavigator);
