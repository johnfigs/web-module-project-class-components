import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
      title: "Wash Car",
      id: 123,
      completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
  }

  handleAddItem = (title) => {
      const newTodo = {
          title: title,
          id: Date.now(),
          completed: false
      }

    this.setState({
        todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!!</h2>
          <TodoForm handleAddItem={this.handleAddItem}/>
        </div>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
