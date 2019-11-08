import React, { Component } from 'react';
import TodoItem from './TodoItem';
<<<<<<< HEAD
import PropTyes from 'prop-types';
=======
import PropTypes from 'prop-types';

>>>>>>> 4e468b374c322b0f8038fe54d37038832de4ecd8

class Todos extends Component {
  render(){
    return this.props.todos.map((todos) => (
      <TodoItem key={todos.id} todos={todos}/>
    ));
  }
}

<<<<<<< HEAD
// PropTypes
Todos.propTypes = {
  todos: PropTyes.array.isRequired
}

=======
Todos.propsTypes = {
  todos: PropTypes.array.isRequired
}


>>>>>>> 4e468b374c322b0f8038fe54d37038832de4ecd8
export default Todos;
 