import React, { Component } from 'react';

class ToDoForm extends Component {
constructor() {
    super();
    this.state = {
        newToDo: ""
    };
}

    render() {
        return (
            <form>
            <input type="text" name="todo" />
            <button>Add</button>
            </form>
        );
    }
}

export default ToDoForm;