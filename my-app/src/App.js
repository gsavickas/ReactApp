import Todos from './components/Todos';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
state = {
  todos: [
    {
      id: 1, 
      title: 'Take out the trash!',
      completed: false
    },
    {
      id: 2, 
      title: 'Say your prayers',
      completed: true
    },
    {
      id: 3, 
      title: 'Make the meme machine!',
      completed: false
    }
  ]
}
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
      <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

