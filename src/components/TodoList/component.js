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
            return <div className="todo__item" key={item.id}>
            {item.text}
            </div>
        });
    }
    renderButtons() {

        const { loadTodos, currentPage } = this.props;

        return (
            <div className="todo__buttons">
                <strong>{currentPage}</strong>
                <button onClick={() => loadTodos(currentPage - 1)}>PREV</button>
                <button onClick={() => loadTodos(currentPage + 1)}>NEXT</button>
            </div>
        );
    }
  render() {
    return (
      <div className="todo">
        {this.renderList()}
        {this.renderButtons()}
    </div>
    );
  }
}

TodoList.defaultProps = {
    todos: []
};

export default TodoList;
