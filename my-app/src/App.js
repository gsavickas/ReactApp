import Todos from './components/Todos';
// import TodosItem from './components/TodosItem';
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
      <p> 
        <Todos/>
      </p>
      </div>
    );
  }
}

export default App;

