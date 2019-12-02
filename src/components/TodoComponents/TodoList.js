import React from 'react';
import Item from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ToDoList = props => {
    return (
        <div>
     {props.dailyList.map(item => (
         <Item key={item.id} item={item} />
     ))}
        
        </div>
    )
}

export default ToDoList;