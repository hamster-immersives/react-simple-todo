import React, { Component } from 'react';

class TaskView extends Component {

    handleDelete = (id) => {
        this.props.handleDelete(id)
    }

    handleEdit = (id) => {
        
        this.props.handleToggle(id)

    }


    render(){

    
        return (
            <li className="list-group-item">
                  { this.props.toggle ? <input 
                    type="text" 
                    value={this.props.task} 
                    style={{textAlign: 'center'}} 
                    onChange={this.handleEdit.bind(this, this.props.id)}
                    />  : `Something I need to do: ${this.props.todo.task}` }
                <input 
                    type="button" 
                    className="float-right btn btn-danger btn-sm" 
                    value="delete" 
                    style={{textAlign: 'center', marginLeft: 5}} 
                    onClick={this.handleDelete.bind(this, this.props.id)}
                    />
                <input 
                    type="button" 
                    className="float-right btn btn-info btn-sm" 
                    value="edit" 
                    style={{textAlign: 'center'}} 
                    onClick={this.handleEdit.bind(this, this.props.id)}
                    />   

              
            </li>
        )
    }
}

export default TaskView;