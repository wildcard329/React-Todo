import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({
            todo: ''
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.todo}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;