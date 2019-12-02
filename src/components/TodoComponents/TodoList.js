import React from 'react';
import Item from './Todo';
import styled from 'styled-components';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ListStyles = styled.div `

position: absolute;
  left: 41%;


.listContainer {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #05386b;
border: 1px solid black;
margin-top: 2rem;
width: 20rem;
background: #EDF5E1; 
font-weight: 700;
border-radius: 5px;
vertical-align: top;
height: 100%;
}

button {
         margin: 1rem;
         padding: 0.4rem;
         width: 10rem;
         border-radius: 15px;
         background: #379683;
         color: #EDF5E1;
         border: none;

         &:hover {
             font-weight: 900;
         }
     }

`;

const ToDoList = props => {
    return (
        <ListStyles>
        <div className="listContainer">
     {props.dailyList.map(item => (
         <Item key={item.id} item={item} />
     ))}
        </div>
        <button onClick={props.clearCOmpleted}>
        Clear Completed
        </button>
        </ListStyles>
    )
}

export default ToDoList;