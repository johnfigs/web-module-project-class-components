// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    const handleClick = () => {
        props.handleClear();
    }

    return (
        <div>
            {props.todos.map(todo => (
                <Todo handleCompleted={props.handleCompleted} key={todo.id} todo={todo} />
            ))}
            <button onClick={handleClick} className='complete-button'>
                Clear Completed
            </button>
        </div>
    );

};

export default TodoList;