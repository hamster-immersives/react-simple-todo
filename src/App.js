import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import { Nav, Task, TaskInput } from './components/container';

class App extends Component {

  state = {
    todo: [
      {
        task: "Buy Milk",
        completed: false,
        id: uuidv4()
      },
      {
        task: "Buy Pizza",
        completed: false,
        id: uuidv4()
      }
    ]
  }

  handleSubmit = (task) => {
    let newItem = {
      task: task,
      completed: false, 
      id: uuidv4()
    }
    let currentItem = Object.assign([], this.state.todo);
    currentItem.push(newItem);
    this.setState({
      todo: currentItem
    })
  }

  handleDelete = (id) => {
    let updated = Object.assign([], this.state.todo);

    let updatedList = updated.filter((task) => 
      task.id !== id
    );
    this.setState({
      todo: updatedList
    })
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  handleEdit = (id, updatedValue) => {
    
    let updated = Object.assign([], this.state.todo);

    /*
      

    */

    updated.map(todo => (todo.id === id ? todo.task = updatedValue : todo))


    this.setState({
      todo: updated
    })

  }

  render() {
    return (
      <div>
        <Nav />
        <TaskInput 
          handleSubmit={this.handleSubmit} 
        />
        <Task 
          {...this.state}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />

        
      </div>
    );
  }
}

export default App;
