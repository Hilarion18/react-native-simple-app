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
import TaskWaiting from "./tasksChildren/TaskWaiting"
import TaskDone from "./tasksChildren/TaskDone"
import TaskOngoing from "./tasksChildren/TaskOngoing"
import TaskAdd from "../../stack/TaskAdd"
import { statement } from '@babel/template';
import { observable, computed, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import styles from './styles/StyleTaskList'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// @inject('stores')
@observer
class TaskList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      showDone: true,
      showOngoing: false,
      showWaiting: false,
      showAdd: false
    }
  }

  static navigationOptions = {
    title: 'TaskAdd',
  };

  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }

  _getCompletedTask = () => {
    this.setState({
      showDone: true,
      showOngoing: false,
      showWaiting: false,
      showAdd: false
    })
  }
  _getOngoingTask = () => {
    this.setState({
      showDone: false,
      showOngoing: true,
      showWaiting: false,
      showAdd: false
    })
  }
  _getWaitingTask = () => {
    this.setState({
      showDone: false,
      showOngoing: false,
      showWaiting: true,
      showAdd: false
    })
  }
  _getAddTask = () => {
    this.setState({
      showDone: false,
      showOngoing: false,
      showWaiting: false,
      showAdd: true
    })
  }

  changeColorButton = () => {
    switch (refColor) {
      case 'RED':
        statement
        break
      case 'BLUE':
        statement
        break
      default:
        statement
        break
    }
  }

  componentDidMount() {
    const { stores } = this.props
    // console.log('========', this.props, stores, stores.taskDone);
  }

  render() {
    // const {navigate} = this.props.navigation;
    // console.log(navigate);
    return (
      <View>
        <View style={styles.menuWrap}>
          <View style={styles.buttonList}>
            <TouchableOpacity style={styles.buttonTask}>
              <Button
                onPress={this._getCompletedTask}
                title="completed"
                color={this.state.showDone ? "#2F94EC" : "lightgray"}
                fontColor
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTask}>
              <Button
                onPress={this._getOngoingTask}
                title="ongoing"
                color={this.state.showOngoing ? "#2F94EC" : "lightgray"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTask}>
              <Button
                onPress={this._getWaitingTask}
                title="waiting"
                borderRadius="10"
                color={this.state.showWaiting ? "#2F94EC" : "lightgray"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
              <Button
                onPress={() => this.props.navigation.navigate({
                  routeName: "TaskAdd"
                })}
                title="Add"
                borderRadius="10"
                color={this.state.showAdd ? "#2F94EC" : "lightgray"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.scopeButton}>
          <View style={styles.myButton}>
            <Text>Rounded Corner</Text>
          </View>
        </View> */}
        <ScrollView style={styles.list}>
          {this.state.showDone ? <TaskDone /> : null}
          {this.state.showOngoing ? <TaskOngoing navigation={this.props.navigation}/> : null}
          {this.state.showWaiting ? <TaskWaiting navigation={this.props.navigation}/> : null}
          {this.state.showAdd ? <TaskAdd /> : null}
        </ScrollView>
      </View>
    );
  }
}


export default inject('stores')(TaskList)