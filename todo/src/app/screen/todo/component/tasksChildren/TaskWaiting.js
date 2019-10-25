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
  ClippingRectangle
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/StyleTaskWaiting'
import { observable, computed, action } from 'mobx'
import { observer, inject } from 'mobx-react'

@observer
class TaskWaiting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskWaiting: [],
      taskOngoing: [],
      taskCancelled: [],
      // textHere: this.props.navigation.setParams({ name: 'Lucy' })
    }
  }

  renderTaskWaiting() {
    const { stores } = this.props
    this.setState({
      taskWaiting: stores.taskWaiting,
      taskOngoing: stores.taskOngoing
    })
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.stores.taskWaiting.length !== this.state.taskWaiting.length) {
  //     this.setState({
  //       taskWaiting: nextProps.stores.taskWaiting
  //     })
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps);
  //   if (prevProps.stores.taskWaiting.length !== this.state.taskWaiting.length) {
  //     this.setState({
  //       taskWaiting: prevProps.stores.taskWaiting
  //     })
  //   }
  // }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.stores.taskWaiting.length !== this.state.taskWaiting.length) {
  //     this.setState({
  //       taskWaiting: nextProps.stores.taskWaiting
  //     })
  //   }
  // }

  componentDidMount() {
    this.renderTaskWaiting()
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  @action
  _addItem = (val) => {
    const { stores } = this.props
    stores.setTaskWaiting(val)
    this.setState({
      taskOngoing: stores.taskOngoing,
      taskWaiting: stores.taskWaiting
    })
  };

  @action
  _deleteItem = (val) => {
    const { stores } = this.props
    stores.setTaskCancelled(val)
    this.setState({
      taskWaiting: stores.taskWaiting
    })
  }

  render() {
    return (
      <View>
        {this.state.taskWaiting.length > 0 ?
          <ScrollView style={styles.taskList}>
            <FlatList
              data={this.state.taskWaiting}
              renderItem={({ item, index }) =>
                // <View>
                //  {item.id % 2 === 1 ? <View style={styles.itemList} /> : <View style={styles.itemList2} /> } 
                <View style={styles.itemList}>
                  <View style={styles.rowItem}>
                    <View style={styles.columnItem}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate({
                        routeName: "TaskWaitingEdit",
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
              }
              keyExtractor={item => item.id}
            />
          </ScrollView>
          : null}
      </View>
    )
  }
}

export default inject('stores')(TaskWaiting)