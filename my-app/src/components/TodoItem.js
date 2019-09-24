import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
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
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p> {this.props.todos.title} </p>
      </div>
    )
  }
}

TodoItem.propsTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem

