<<<<<<< HEAD
import React, { Component } from 'react'
import PropTyes from 'prop-types';
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';
>>>>>>> 4e468b374c322b0f8038fe54d37038832de4ecd8

export class TodoItem extends Component {

  getStyle = () => {
<<<<<<< HEAD
    return {
      
=======
    if (this.props.todos.completed)
    {
      return {
        textDecoration: 'line-through'
      }
    }
    else {
      return {
        textDecoration: 'none'
      }
>>>>>>> 4e468b374c322b0f8038fe54d37038832de4ecd8
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
<<<<<<< HEAD
        <p>{ this.props.todos.title }</p>
=======
        <p> {this.props.todos.title} </p>
>>>>>>> 4e468b374c322b0f8038fe54d37038832de4ecd8
      </div>
    )
  }
}

<<<<<<< HEAD
// PropTypes
TodoItem.propTypes = {
  todos: PropTyes.object.isRequired
}


=======
TodoItem.propsTypes = {
  todo: PropTypes.object.isRequired
}

>>>>>>> 4e468b374c322b0f8038fe54d37038832de4ecd8
export default TodoItem

