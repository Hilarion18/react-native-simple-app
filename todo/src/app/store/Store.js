import { observable, action, computed } from 'mobx'
import { observer, inject } from 'mobx-react'
import React, {Component} from 'react'

class Store {
  @observable todos = []

  @observable taskDone = [
    {
      id: 1,
      title: "create navbar",
      description: "create navbar using component",
      point: 1
    },
    {
      id: 2,
      title: "create home page",
      description: "consume API",
      point: 2
    },
    {
      id: 3,
      title: "create todo page",
      description: "consume API create CRUD tasks",
      point: 3
    },
    {
      id: 4,
      title: "create history page",
      description: "consume API from history",
      point: 2
    },
    {
      id: 5,
      title: "create add task waiting",
      description: "create endpoint and logic",
      point: 1
    },
  ]

  @observable taskOngoing = [
    {
      id: 6,
      title: "create add task on going",
      description: "create endpoint and logic",
      point: 2
    },
    {
      id: 7,
      title: "create reject task waiting",
      description: "create endpoint and logic",
      point: 3
    },
  ]

  @observable taskWaiting = [
    {
      id: 8,
      title: "create decline task ongoing",
      description: "create endpoint and logic",
      point: 2
    },
    {
      id: 9,
      title: "create filter and sort task in history page",
      description: "using sorting and filtering for task in  history page",
      point: 1
    },
    {
      id: 10,
      title: "create authentication login",
      description: "creating authentication to save to database",
      point: 3
    },
    {
      id: 11,
      title: "create google maps",
      description: "create google to be used for saving place in the future",
      point: 3
    }
  ]

  @observable taskCancelled = [
    {
      id: 12,
      title: "create animated payment successed",
      description: "create animated if payment succeed and redirect after 2 seconds",
      point: 5
    }
  ]

  @action
  setTaskWaiting(val){
    this.taskOngoing = [...this.taskOngoing, val]
    this.taskWaiting = this.taskWaiting.filter(data => data.id !== val.id )
  }

  @action
  setTaskOngoing(val) {
    this.taskDone = [...this.taskDone, val]
    this.taskOngoing = this.taskOngoing.filter(data => data.id !== val.id)
  }

  @action
  setTaskCancelled(val) {
    this.taskCancelled = [...this.taskCancelled, val]
    this.taskWaiting = this.taskWaiting.filter(data => data.id !== val.id )
  }

  @action
  setAddTask(val) {
    this.taskWaiting = [...this.taskWaiting, val]
  }

  @action
  setEditTaskWaiting(val) {
    const indexTaskWaiting = this.taskWaiting.map( function (item) {return item.id}).indexOf(val.id)
    this.taskWaiting[indexTaskWaiting] = val
  }

  @action
  setEditTaskOngoing(val) {
    const indexTaskOngoing = this.taskOngoing.map( function (item) {return item.id}).indexOf(val.id)
    this.taskOngoing[indexTaskOngoing] = val
  }
  

  @computed get todosList() {
    return [
      {
      content: "Task done",
      total: this.taskDone.length
    },
    {
      content: "Task on going",
      total: this.taskOngoing.length
    },
    {
      content: "Task not taken",
      total: this.taskWaiting.length
    }
  ]
  }

  // @computed get pullTaskDone() {
  //   return this.taskDone
  // }
  // @computed get pullTaskOngoing() {
  //   return this.taskOngoing
  // }
  // @computed get pullTaskWaiting() {
  //   return this.taskWaiting
  // }
}

const Stores = new Store()

export default Stores