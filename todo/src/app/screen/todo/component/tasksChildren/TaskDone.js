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
import { observable, computed, action } from 'mobx'
import { observer, inject } from 'mobx-react'

// @inject('stores')
@observer
class TaskDone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskDone: []
    }
  }

  renderTaskDone = async() => {
    const { stores } = this.props
    this.setState({
      taskDone: stores.taskDone
    })
  }

  componentDidMount() {
    this.renderTaskDone()
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

export default inject('stores')(TaskDone)