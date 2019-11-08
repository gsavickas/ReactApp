import React, { Component } from 'react'
import PropTyes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>{ this.props.todos.title }</p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTyes.object.isRequired
}


export default TodoItem
