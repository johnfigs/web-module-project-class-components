import React, { useState } from 'react';

const Todo = props => {
    
    const handleClick = () => {
        //handleCompleted
    }
    return(
        <div>
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;