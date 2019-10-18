import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  ListView
} from 'react-native';
import { TodoReport } from './component/TodoReport'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "bacot",
      todoList: {
        taskDone: "Task done",
        totalTaskDone: 5,
        taskOngoing: "Task on going",
        totalTaskOngoing: 2,
        taskUntaken: "Task not taken",
        totalTaskUntaken: 10
      },
      todos: [
        {
          content: "Task done",
          total: 5
        },
        {
          content: "Task on going",
          total: 2
        },
        {
          content: "Task not taken",
          total: 10
        }
      ],
      arr: [
        "text1", "text2"
      ]
    }
  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Home Screen</Text>
      // </View>
      <View >
        <TodoReport />
      </View>
    );
  }
}
