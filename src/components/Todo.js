import React from 'react';

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleCompleted(props.todo.id)}
            className={`todo${props.todo.completed ? ' completed' : ''}`}>    
            <p>{props.todo.name}</p>
        </div>
    );
};

export default Todo;