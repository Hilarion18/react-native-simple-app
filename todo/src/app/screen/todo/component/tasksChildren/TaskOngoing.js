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
import styles from  '../styles/StyleTaskOngoing'

export class TaskOngoing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskOngoing: [
        {
          id: 5,
          title: "create filter and sort task in history page",
          description: "using sorting and filtering for task in  history page",
          point: 1
        }
      ],
      done: '',
      doneMark: [],
      setDoneMark: []
    }
  }

  componentDidMount() {
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  _addItem = (val) => {
    console.log(val);
  };

  _deleteItem = (itemId) => {
    const updatedTaskOngoing = this.state.taskOngoing.filter((item) => item.id !== itemId)
    this.setState({
      taskOngoing: updatedTaskOngoing
    })
  }

  render() {
    return(
      <View>
      {this.state.taskOngoing.length > 0 ? 
        <ScrollView style={styles.taskList}>
          <FlatList
            data={this.state.taskOngoing}
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
      </View>
    )
  }
}
