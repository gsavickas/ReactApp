import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTyes from 'prop-types';

class Todos extends Component {
  render(){
    return this.props.todos.map((todos) => (
      <TodoItem key={todos.id} todos={todos}/>
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTyes.array.isRequired
}

export default Todos;
 