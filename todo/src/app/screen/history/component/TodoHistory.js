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
  FlatList
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

export class TodoHistory extends React.Component {
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
        }
      ],
      taskOngoing: [
        {
          id: 5,
          title: "create filter and sort task in history page",
          description: "using sorting and filtering for task in  history page",
          point: 1
        }
      ],
      taskUntaken: [
        {
          id: 6,
          title: "create authentication login",
          description: "creating authentication to save to database",
          point: 3
        },
        {
          id: 7,
          title: "create google maps",
          description: "create google to be used for saving place in the future",
          point: 3
        }
      ]
    }
  }
  render() {
    console.log(this.state.taskDone);
    return (
      <View>
        <View>
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskList: {
    padding: 10
  },
  itemList: {
    borderColor: "gray",
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
})