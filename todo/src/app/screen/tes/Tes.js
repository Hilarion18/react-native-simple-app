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
  TouchableOpacity
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export class TesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredText: '',
      setEnteredText: '',
      list: ['a', 'b', 'c'],
      arrText: []
    };
  }
  
  textInputHandler = (enteredText) => {
    this.setState({
      setEnteredText: enteredText
    })
  }

  addTextHandler = (val) => {
    this.setState({list: [...this.state.list, val]})
  }

  render() {
    return (
      <View style={styles.todoPage}>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => (
            <Text>{item}</Text>
          )}
            keyExtractor={item => item.id}
        />
        <TextInput
          style={styles.textInput}
          value={this.state.enteredText}
          onChangeText={(enteredText) => 
          this.setState({enteredText})}
        />
        <TouchableOpacity
          style={styles.button}
        >
          <Button title="Add"
            onPress={() => this.addTextHandler(this.state.enteredText)}
            style={styles.addButton}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoPage: {
    marginBottom: 80
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    maxWidth: 300
  },
  addButton: {
    borderWidth: 1,
    borderColor: "blue",
  },
  button: {
    justifyContent: "flex-start",
    width: 100
  }
})

