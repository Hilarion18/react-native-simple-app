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
import { TaskWaiting } from "./tasksChildren/TaskWaiting"
import { TaskDone } from "./tasksChildren/TaskDone"
import { TaskOngoing } from "./tasksChildren/TaskOngoing"
import { statement } from '@babel/template';

export class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskDone: [],
      taskOngoing: [],
      taskUntaken: [],
      showDone: true,
      showOngoing: false,
      showWaiting: false,
    }
  }

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
      showWaiting: false
    })
  }
  _getOngoingTask = () => {
    this.setState({
      showDone: false,
      showOngoing: true,
      showWaiting: false
    })
  }
  _getWaitingTask = () => {
    this.setState({
      showDone: false,
      showOngoing: false,
      showWaiting: true
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

  render() {
    return (
      <View>
        <View style={styles.menuWrap}>
          <View style={styles.buttonList}>
            <TouchableOpacity>
              <View style={styles.buttonTask}>
                <Button
                  onPress={this._getCompletedTask}
                  title="completed"
                  color={this.state.showDone ? "#2F94EC" : "lightgray"}
                  fontColor
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.buttonTask}>
                <Button
                  onPress={this._getOngoingTask}
                  title="ongoing"
                  color={this.state.showOngoing ? "#2F94EC" : "lightgray"}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Button style={styles.buttonTask}
                  onPress={this._getWaitingTask}
                  title="waiting"
                  color={this.state.showWaiting ? "#2F94EC" : "lightgray"}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.scopeButton}>
          <View style={styles.myButton}>
            <Text>Rounded Corner</Text>
          </View>
        </View> */}
        <ScrollView style={styles.list}>
          {this.state.showDone ? <TaskDone></TaskDone> : null}
          {this.state.showOngoing ? <TaskOngoing></TaskOngoing> : null}
          {this.state.showWaiting ? <TaskWaiting></TaskWaiting> : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    paddingTop: 15,
  },
  buttonTask: {
    color: "red",
  },
  buttonGreen: {
    color: "green",
  },
  list: {
    marginBottom: 20
  },
  menuWrap: {
    borderRadius: 20,
  },
  myButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#23b11b',
  },
  scopeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})