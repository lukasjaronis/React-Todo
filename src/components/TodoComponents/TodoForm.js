import React, { Component } from 'react';
import styled from 'styled-components';

const FormStyles = styled.div `

form {
 .formContainer {

    input {
        border-radius: 15px;
        border: none;
        height: 2rem;
        text-indent: 20px;
        border: 2px solid #fff;
    }

     button {
         margin: 1rem;
         padding: 0.4rem;
         width: 4rem;
         border-radius: 15px;
         background: #379683;
         color: #EDF5E1;
         border: none;

         &:hover {
             font-weight: 900;
         }
     }
 }
}

`;

class ToDoForm extends Component {
constructor() {
    super();
    this.state = {
        newToDo: ""
    };
}

handleChanges = element => {
    this.setState({newToDo: element.target.value});
};

handleSubmit = element => {
    element.preventDefault();
    this.props.addToDo(this.state.newToDo);
    this.setState({
        newToDo: ""
    });
};

    render() {
        return (
            <FormStyles>
            <form onSubmit={this.handleSubmit}>
            <div className="formContainer">
            <input placeholder="..." value={this.state.newToDo} onChange={this.handleChanges} type="text" name="todo" />
            <button>Add</button>
            </div>
            </form>
            </FormStyles>
        );
    }
}

export default ToDoForm;