import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
