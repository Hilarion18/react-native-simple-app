import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import TaskList from './component/TaskList'

export default class TodoScreen extends React.Component {
  render() {
    return (
      <View style={styles.todoPage}>
        <TaskList navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoPage: {
    marginBottom: 80
  }
})

