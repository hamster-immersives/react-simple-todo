import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import TaskView from './components/view/TaskView';
import Nav from './components/container/Nav';
import TaskInput from './components/container/TaskInput';

class App extends Component {

  state = {
    todo: [
      {
        task: "Buy Milk",
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
  render() {
    return (
      <div>
        <Nav />
        <TaskInput 
          handleSubmit={this.handleSubmit} 
        />

        {
          this.state.todo.map((element) => {
            return (
              <TaskView 
                key={element.id}
                task={element.task}
                />
            )
          })
        }
        
      </div>
    );
  }
}

export default App;
