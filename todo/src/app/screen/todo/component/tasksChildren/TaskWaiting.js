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
  TouchableWithoutFeedback
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/StyleTaskWaiting'

export class TaskWaiting extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      taskWaiting: [
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
      ],
    }
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  _addItem = (val) => {
    console.log(val);
  };

  _deleteItem = (itemId) => {
    const updatedTaskWaiting = this.state.taskWaiting.filter((item) => item.id !== itemId)
    this.setState({
      taskWaiting: updatedTaskWaiting
    })
  }

  render() {
    return(
      <View>
      {this.state.taskWaiting.length > 0 ? 
        <ScrollView style={styles.taskList}>
          <FlatList
            data={this.state.taskWaiting}
            renderItem={({ item }) => (
              <View style={styles.itemList}>
                <View style={styles.rowItem}>
                  <View  style={styles.columnItem}>
                    <Text style={styles.titleItem}>{item.title}</Text>
                    <Text style={styles.descItem}>{item.description}</Text>
                  </View>
                  <TouchableHighlight
                    value={item.id}
                    onPress={() => this._addItem(item.id)}
                    underlayColor="white"
                    style={styles.iconItem}
                  >
                    <Icon style={styles.icon} name="check" size={23} color="#5fb660" /> 
                  </TouchableHighlight>
                  <TouchableHighlight
                      onPress={() => this._deleteItem(item.id)}
                      style={styles.iconItem}
                    >
                      <Icon style={styles.icon} name="remove" size={25} color="#d75452" />
                  </TouchableHighlight>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </ScrollView>
        : null }
        {/* <ScrollView style={styles.taskList}>
          <FlatList
            data={this.state.taskWaiting}
            renderItem={({ item }) => (
              <ListItem style={styles.itemList}
              roundAvatar 
              title={`${item.title}`}
              subtitle = {item.description}
              />
            )}
            keyExtractor={item => item.id}
          />
        </ScrollView> */}
      </View>
    )
  }
}