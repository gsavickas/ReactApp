import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
  render(){
    return this.props.todos.map((todos) => (
      <TodoItem key={todos.id} todos={todos}/>
    ));
  }
}

Todos.propsTypes = {
  todos: PropTypes.array.isRequired
}


export default Todos;
 