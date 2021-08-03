import React from 'react';

const Todo = props => {
    
    const handleClick = () => {
        props.handleCompleted(props.todo.id);
    }
    return(
        <div onClick={handleClick} className={`${props.todo.completed ? 'completed' : ''}`}>
            <p>{props.todo.title}</p>
        </div>
    );
};

export default Todo;