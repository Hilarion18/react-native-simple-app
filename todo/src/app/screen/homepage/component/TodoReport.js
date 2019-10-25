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
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import styles from '../styles/StyleTodoReport'

@observer
class TodoReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  @computed
  get todoData() {
    return this.state.todos
  }

  renderDoneTask = async() => {
    const { stores } = this.props
    this.setState({
      todos: stores.todosList
    })
  }
  
  componentDidMount() {
    this.renderDoneTask()
  }

  render() {
    const { stores } = this.props
    return (
      <View >
        <View style={styles.scopeTodo}>
            {stores.todosList.map((item, index) => (
            <View style={styles.todoColumn}>
                <Text style={styles.textTodo}>{item.content}</Text>
                <Text style={styles.textScore}>{item.total}</Text>
            </View>
            ))}
        </View>
      </View>
    );
  }
}


export default inject('stores')(TodoReport)