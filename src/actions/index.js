import * as api from '~/api';

export function setPage(page) {
    return {
        type: 'SET_PAGE',
        page
    };
}

export function receiveTodos(todos, page) {
    return {
        type: 'RECEIVE_TODOS',
        todos,
        page
    };
}

export function loadTodos(page = 1) {
    return (dispatch, getState) => {
        const { todos } = getState();

        if (todos.idsByPage[page]) {
            dispatch(setPage(page));
        } else {
            api.loadTodos(page)
                .then((todos) => {
                    dispatch(receiveTodos(todos, page));
                    dispatch(setPage(page));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}

export function increase() {
    return {
        type: 'INCREASE'
    };
}
