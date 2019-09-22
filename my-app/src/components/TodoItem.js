import React, { Component } from 'react';
// import Todos from './Todos';

class TodosItem extends Component {
  render(){
    return this.props.todos.map((todos) => (
      <TodosItem todos={todos}/>
    ));
  }
}

export default TodosItem;