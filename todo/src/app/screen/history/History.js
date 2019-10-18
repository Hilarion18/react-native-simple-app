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
import { TodoHistory } from './component/TodoHistory'

export class HistoryScreen extends React.Component {
  render() {
    return (
      <View>
        <TodoHistory/>
      </View>
    );
  }
}
