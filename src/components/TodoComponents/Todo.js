import React from 'react';

const todo = props => {
    return (
        <div className={`todo${props.item.added ? ' added' : ''}`}>
        <span>{props.todo.name}</span>
        </div>
    )
}

export default todo;