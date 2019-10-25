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
  TouchableWithoutFeedback,
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import styles from './style/StyleTaskAdd'
import { observable, computed, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import Icon from 'react-native-vector-icons/AntDesign'

// @inject('stores')
@observer
class TaskWaitingEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskWaiting: [],
      id: this.props.navigation.state.params.id,
      title: "",
      description: "",
      point: 0
    }
  }

  renderTaskWaiting() {
    const { stores } = this.props
    // const getTask = ''
    // this.setState({

    // })
  }

  componentDidMount() {
    this.renderTaskWaiting()
    console.log(`======= 2`, this.props.navigation.state.params)
  }

  @action
  _editItem = async() => {
    const { stores } = this.props
    val = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      point: this.state.point
    }
    console.log(val);
    stores.setEditTaskWaiting(val)
    this.props.navigation.goBack()
  }

  titleInputHandler = (val) => {
    this.setState({
      title: val
    })
  }

  descriptionInputHandler = (val) => {
    this.setState({
      description: val
    })
  }

  pointInputHandler = (val) => {
    this.setState({
      point: val
    })
  }
  
  render() {
    return(
      <View>
      <Icon.Button 
        name="back"
        size={40}
        color="white"
        backgroundColor="#2F94EC"
        justifyContent="center"
        onPress={() => this.props.navigation.goBack()}
      />
        <View style={styles.input}>
          <Text style={styles.text}>Input your task title</Text>
          <TextInput 
            placeholder={this.props.navigation.state.params.title}
            style={styles.titleInput}
            value={this.state.title}
            onChangeText={ (val) => 
            this.titleInputHandler(val)}
          />
          <Text style={styles.text}>Input your task content</Text>
          <TextInput
            placeholder={this.props.navigation.state.params.description}
            style={styles.contentInput}
            value={this.state.description}
            onChangeText={(val) => 
            this.descriptionInputHandler(val)}
          />
          <Text style={styles.text}>Input point of the task</Text>
          <TextInput
            // placeholder={this.props.navigation.state.params.point}
            style={styles.contentInput}
            value={this.state.point}
            onChangeText={(val) => 
            this.pointInputHandler(val)}
          />
        </View>
        <View style={styles.viewSubmit}>
          <TouchableOpacity style={styles.borderSubmit}>
            <Text
              style={styles.submit}
              onPress={() => this._editItem()}
              >Submit</Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }
}

export default inject('stores')(TaskWaitingEdit)