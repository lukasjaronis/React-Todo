import React, { Component } from 'react';

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
            <form onSubmit={this.handleSubmit}>
            <input value={this.state.newToDo} onChange={this.handleChanges} type="text" name="todo" />
            <button>Add</button>
            </form>
        );
    }
}

export default ToDoForm;