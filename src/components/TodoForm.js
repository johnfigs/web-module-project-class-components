import React from "react";

class TodoForm extends React.Component {

    constructor(){    
        super();
        this.state = {
        inputValue: ""
        }
    }

    handleChanges = (e) => {
        this.setState({
            ...this.state,
            inputValue: e.target.value
        })    
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.inputValue);
    }

    render(){
        return (
            <form>
                <label>
                    ToDo:
                    <input onChange={this.handleChanges} type="text" name="todo" />
                    <button onSubmit={this.handleClick}> Add </button>
                    <button> Clear Completed </button>
                </label>   
            </form>
        );
    }
}

export default TodoForm;