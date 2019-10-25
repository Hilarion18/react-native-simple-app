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
import { observable, computed, action } from 'mobx'
import { observer, inject } from 'mobx-react'

@observer
class TaskOngoing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskOngoing: [],
      taskDone: [],
      done: '',
      doneMark: [],
      setDoneMark: []
    }
  }
  
  renderTaskOngoing = async() => {
    const { stores } = this.props
    this.setState({
      taskOngoing: stores.taskOngoing
    })
  }

  componentDidMount() {
    this.renderTaskOngoing()
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  @action
  _addItem = (val) => {
    const { stores } = this.props
    stores.setTaskOngoing(val)
    this.setState({
      taskDone: stores.taskDone,
      taskOngoing: stores.taskOngoing
    })
  };

  @action
  _deleteItem = (itemId) => {
    const { stores } = this.props
    stores.setTaskCancelled(val)
    this.setState({
      taskWaiting: stores.taskWaiting
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
                      <TouchableOpacity onPress={() => this.props.navigation.navigate({
                        routeName: "TaskOngoingEdit",
                        params: item
                      })}>
                        <Text style={styles.titleItem}>{item.id}. {item.title}</Text>
                        <Text style={styles.descItem}>{item.description}</Text>
                      </TouchableOpacity>
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
      </View>
    )
  }
}

export default inject('stores')(TaskOngoing)