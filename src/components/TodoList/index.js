import { connect } from 'react-redux';
import Component from './component';
import { loadTodos } from '../../actions';
import { getAllTodosByPage, requestNextPage } from '~/reducers/todos';

function mapDispatchToProps(dispatch) {
    return {
        loadTodos: function(page) {
            dispatch(loadTodos(page))
        }
    }
}

function mapStateToProps(state) {
    return {
        todos: getAllTodosByPage(state.todos),
        currentPage: state.todos.currentPage
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Component);
