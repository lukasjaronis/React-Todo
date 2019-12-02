import React, { Component } from "react";
import styled from "styled-components";

const FormStyles = styled.div`
  form {
    .formContainer {
      input {
        border: none;
        background: none;
        height: 2rem;
        text-indent: 20px;
        border-bottom: 2px solid #379683;
        color: #edf5e1;
        text-decoration: none;

        &:focus {
          outline: none;
          border-top: 2px solid #379683;
        }

        &::placeholder {
          color: #edf5e1;
        }
      }

      button {
        margin: 1rem;
        padding: 0.4rem;
        width: 4rem;
        border-radius: 15px;
        background: #379683;
        color: #edf5e1;
        border: none;

        &:hover {
          font-weight: 900;
        }

        &:focus {
          outline: none;
         
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
    this.setState({ newToDo: element.target.value });
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
            <input
              placeholder="..."
              value={this.state.newToDo}
              onChange={this.handleChanges}
              type="text"
              name="todo"
            />
            <button>Add</button>
          </div>
        </form>
      </FormStyles>
    );
  }
}

export default ToDoForm;
