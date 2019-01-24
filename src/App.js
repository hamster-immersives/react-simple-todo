import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import TaskView from './components/view/TaskView';
import Nav from './components/container/Nav';

class App extends Component {

  state = {
    todo: [
      {
        task: "Buy Milk",
        completed: false,
        id: uuidv4()
      }
    ],
    task: ''
  }

  handleInput = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newItem = {
      task: this.state.task,
      completed: false, 
      id: uuidv4()
    }
    let currentItem = Object.assign([], this.state.todo);
    currentItem.push(newItem);

    this.setState({
      todo: currentItem
    }, () => {
      this.formSubmit.reset();
    })

  }

  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.handleSubmit} ref={ (el) => this.formSubmit = el }>
          <input 
            text="task" 
            onChange={this.handleInput}
          />
          <button>Submit</button>
        </form>
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
