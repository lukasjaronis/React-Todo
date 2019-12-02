import React from 'react';
import styled from 'styled-components';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';


const AppStyles = styled.div `

display: flex;
justify-content: center;
align-items: flex-start;
background: #05386B;
height: 100vh;
width: 100%;

.appContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 40%;

  h2 {
  font-size: 4rem;
  color: #EDF5E1;
}
}




`;

const dailyList = [
  {
    name: 'Clean room',
    id: 1,
    completed: false
  },
  {
    name: 'Take out trash',
    id: 2,
    completed: false
  },
  {
    name: 'Finish homework',
    id: 3,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
  super();
this.state = {
dailyList: dailyList
}
}

toggleItem = id => {
  this.setState({
    dailyList: this.state.dailyList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
  })
}


addToDo = newToDoText => {

  const newToDo = {
    name: newToDoText,
    id: Date.now(),
    completed: false
  };
  this.setState({
    dailyList: [...this.state.dailyList, newToDo]
  });

}

  render() {
    return (
      <AppStyles>
      <div className="appContainer">
        <h2>A Todo App</h2>
        <ToDoForm addToDo={this.addToDo} />
        <div>
        <ToDoList toggleItem={this.toggleItem} dailyList={this.state.dailyList} />
        </div>
      </div>
      </AppStyles>
    );
  }
}

export default App;
