import { connect } from 'react-redux';
import Component from './component';
import { loadTodos, increase } from '../../actions';

function mapDispatchToProps(dispatch) {
    return {
        loadTodos: function() {
            dispatch(loadTodos())
        },
        increase: function() {
            dispatch(increase());
        }
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        counter: state.counter
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Component);
