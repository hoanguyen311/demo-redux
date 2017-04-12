import React, { Component } from 'react';


class TodoList extends Component {
    componentDidMount() {
        const loadTodos = this.props.loadTodos;

        if (typeof loadTodos === 'function') {
            loadTodos();
        }
    }
    renderList() {
        return this.props.todos.map((item, i) => {
            return <div className="todo__item" key={i}>
            {item}
            </div>
        });
    }
  render() {
    return (
      <div className="todo">
        {this.renderList()}
        <button onClick={() => this.props && this.props.increase()}>+</button>
        {this.props.counter}
    </div>
    );
  }
}

TodoList.defaultProps = {
    todos: [],
    counter: 0
};

export default TodoList;
