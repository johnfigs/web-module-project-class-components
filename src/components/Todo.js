import React, { useState } from 'react';

const Todo = props => {
    
    const handleClick = () => {
        //handleCompleted
    }
    return(
        <div>
            <p>{props.todo.title}</p>
        </div>
    );
};

export default Todo;