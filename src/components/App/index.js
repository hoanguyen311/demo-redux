import React, { Component } from 'react';
import TodoList from '../TodoList';

import './style.less';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__todos">
            <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
