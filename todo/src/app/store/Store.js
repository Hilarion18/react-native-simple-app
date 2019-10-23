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
      title: "create navbar",
      description: "create navbar using component",
      point: 1
    },
    {
      id: 6,
      title: "create home page",
      description: "consume API",
      point: 2
    },
    {
      id: 7,
      title: "create todo page",
      description: "consume API create CRUD tasks",
      point: 3
    },
    {
      id: 8,
      title: "create history page",
      description: "consume API from history",
      point: 2
    }
  ]

  @observable taskOngoing = [
    {
      id: 5,
      title: "create filter and sort task in history page",
      description: "using sorting and filtering for task in  history page",
      point: 1
    }
  ]

  @observable taskWaiting = [
    {
      id: 6,
      title: "create authentication login",
      description: "creating authentication to save to database",
      point: 3
    },
    {
      id: 7,
      title: "create google maps",
      description: "create google to be used for saving place in the future",
      point: 3
    }
  ]

  @observable taskCancelled = [
    {
      id: 8,
      title: "create amnimated payment successed",
      description: "create animated if payment successed and redirect after 2 seconds",
      point: 5
    }
  ]

  @action
  setTaskWaiting(val){
    console.log('===== val',val);
    this.taskOngoing = [...this.taskOngoing, val]
    this.taskWaiting = this.taskWaiting.filter(data => data.id !== val.id )
  }

  @action
  setTaskOngoing(val) {
    console.log('===== val', val);
    this.taskDone = [...this.taskDone, val]
    this.taskOngoing = this.taskOngoing.filter(data => data.id !== val.id)
  }

  @action
  setTaskCancelled(val) {
    this.taskCancelled = [this.taskCancelled, val]
    this.taskDone = this.taskDone.filter(data => data.id !== val.id)
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
}

const Stores = new Store()

export default Stores