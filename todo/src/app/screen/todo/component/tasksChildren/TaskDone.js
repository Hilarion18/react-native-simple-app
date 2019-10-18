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
  Segment,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import styles from '../styles/StyleTaskDone'

export class TaskDone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskDone: [
        {
          id: 1,
          title: "create navbar",
          description: "create navbar using component",
          point: 1
        },
        {
          id: 2,
          title: "create home page",
          description: "consume API",
          point: 2
        },
        {
          id: 3,
          title: "create todo page",
          description: "consume API create CRUD tasks",
          point: 3
        },
        {
          id: 4,
          title: "create history page",
          description: "consume API from history",
          point: 2
        },
        {
          id: 5,
          title: "create navbar",
          description: "create navbar using component",
          point: 1
        },
        {
          id: 6,
          title: "create home page",
          description: "consume API",
          point: 2
        },
        {
          id: 7,
          title: "create todo page",
          description: "consume API create CRUD tasks",
          point: 3
        },
        {
          id: 8,
          title: "create history page",
          description: "consume API from history",
          point: 2
        }
      ],
    }
  }
  render() {
    return(
      <View>
        <ScrollView style={styles.taskList}>
          <FlatList
            data={this.state.taskDone}
            renderItem={({ item }) => (
              <ListItem style={styles.itemList}
              roundAvatar 
              title={`${item.title}`}
              subtitle = {item.description}
              />
            )}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    )
  }
}
