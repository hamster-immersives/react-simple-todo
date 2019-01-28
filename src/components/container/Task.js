import React, { Component } from 'react'
import TaskView from '../view/TaskView';

export default class Task extends Component {
  render() {
    
    const tasks = this.props.todo;

    let task = tasks.map(todo => {
        return (
            <TaskView 
                key={todo.id}
                todo={todo}
            />
        )
    })

    return (
      <div>
        {task}
      </div>
    )
  }
}
