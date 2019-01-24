import React, { Component } from 'react';

const TaskView = (props) => {
    return (
        <div>
            Something I need to do: {props.task}
        </div>
    )
}

export default TaskView;