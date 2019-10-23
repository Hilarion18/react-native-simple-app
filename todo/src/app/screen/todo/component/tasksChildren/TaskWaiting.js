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
import { observable, computed, action } from 'mobx'
import { observer, inject } from 'mobx-react'

@observer
class TaskWaiting extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      taskWaiting: [],
      taskOngoing: [],
      taskCancelled: []
    }
  }

  // @computed
  // get taskWaiting() {
  //   return this.state.taskWaiting
  // }

  // @computed
  // get taskOngoing() {
  //   return this.state.taskOngoing
  // }

  renderTaskWaiting() {
    const { stores } = this.props
    this.setState({
      taskWaiting: stores.taskWaiting,
      taskOngoing: stores.taskOngoing
    })
  }

  componentDidMount() {
    this.renderTaskWaiting()
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  @action
  _addItem = (val) => {
    const { stores } = this.props
    stores.setTaskWaiting(val)
    this.setState({
      taskOngoing: stores.taskOngoing,
      taskWaiting: stores.taskWaiting
    })
  };

  @action
  _deleteItem = (itemId) => {
    const updatedTaskWaiting = this.state.taskWaiting.filter((item) => item.id !== itemId)
    this.setState({
      taskWaiting: updatedTaskWaiting,
      taskCancelled: [...stores.taskCancelled, itemId]
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
                    onPress={() => this._addItem(item)}
                    underlayColor="white"
                    style={styles.iconItem}
                  >
                    <Icon style={styles.icon} name="check" size={23} color="#5fb660" /> 
                  </TouchableHighlight>
                  <TouchableHighlight
                      onPress={() => this._deleteItem(item)}
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

export default inject('stores')(TaskWaiting)