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
  ListView
} from 'react-native';
import TodoReport from './component/TodoReport'
import { inject } from 'mobx-react';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Home Screen</Text>
      // </View>
      <View >
        <TodoReport />
      </View>
    );
  }
}

export default HomeScreen