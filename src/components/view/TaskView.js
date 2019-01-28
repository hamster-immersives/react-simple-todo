import React, { Component } from 'react';

const TaskView = (props) => {
    return (
        <li className="list-group-item">
            Something I need to do: {props.task}
            <input 
                type="button" 
                className="float-right btn btn-danger btn-sm" 
                value="delete" 
                style={{textAlign: 'center', marginLeft: 5}} />
            <input 
                type="button" 
                className="float-right btn btn-info btn-sm" 
                value="edit" 
                style={{textAlign: 'center'}} />    
        </li>
    )
}

export default TaskView;