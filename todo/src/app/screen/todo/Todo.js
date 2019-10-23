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

export class TodoScreen extends React.Component {
  render() {
    return (
      <View style={styles.todoPage}>
        <TaskList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoPage: {
    marginBottom: 80
  }
})

