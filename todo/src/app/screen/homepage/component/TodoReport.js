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

export class TodoReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
          id: 1,
          content: "Task done",
          total: 5
        },
        {
          id: 2,
          content: "Task on going",
          total: 2
        },
        {
          id: 3,
          content: "Task not taken",
          total: 10
        }
      ],
    }
  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <View >
        <View style={styles.scopeTodo}>
            {this.state.todos.map((item, index) => (
            <View style={styles.todoColumn}>
                <Text style={styles.textTodo}>{item.content}</Text>
                <Text style={styles.textScore}>{item.total}</Text>
            </View>
            ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "#DCDCDC"
  },
  scopeTodo: {
    padding: 50,
  },
  textTodo: {
    fontSize: 25
  },
  textScore: {
    textAlign: "right",
    fontSize: 25,
    color: "green",
    paddingRight: 10
  },
})