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
      completed: false
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
<<<<<<< Updated upstream
      <Todos todos={this.state.todos}/>
=======
      <p> 
        <Todos todos={this.state.todos}/>
        <Todos/>
      </p>
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default App;

