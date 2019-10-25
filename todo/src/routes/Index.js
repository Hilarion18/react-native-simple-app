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
import TaskWaitingEdit from '../app/screen/stack/TaskWaitingEdit'
import TaskOngoingEdit from '../app/screen/stack/TaskOngoingEdit'
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
  TaskWaitingEdit: {
    screen: TaskWaitingEdit,
    navigationOptions: {
      header: null,
      title: 'TaskWaitingEdit'
    }
  },
  TaskOngoingEdit: {
    screen: TaskOngoingEdit,
    navigationOptions: {
      header: null,
      title: 'TaskOngoingEdit'
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
