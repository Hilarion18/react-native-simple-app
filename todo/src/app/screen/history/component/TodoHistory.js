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
import styles from '../styles/StyleTodoHistory'
import { observable, computed, action } from 'mobx'
import { observer, inject } from 'mobx-react'

class TodoHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskDone: [],
      taskOngoing: [],
      taskWaiting: [],
      taskCancelled: []
    }
  }

  renderTaskCancelled() {
    const { stores } = this.props
    this.setState({
      taskCancelled: stores.taskCancelled,
    })
  }

  componentDidMount() {
    this.renderTaskCancelled()
  }

  render() {
    return (
      <View>
        <View>
          <FlatList
            data={this.state.taskCancelled}
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

export default inject('stores')(TodoHistory)