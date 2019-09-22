import React, { Component } from 'react';
import TodosItem from './TodosItem';

class Todos extends Component {
  render(){
    return this.props.todos.map((todos) => (
      <TodosItem todos={todos}/>
    ));
  }
}

export default Todos;
