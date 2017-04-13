function byId(state = {}, action) {
    switch (action.type) {
        case 'RECEIVE_TODOS':
            const newState = {
                ...state
            };

            action.todos.forEach(function(todo) {
                newState[todo.id] = todo;
            });

            return newState;
        default:
            return state;
    }
}

function allIds(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_TODOS':
            return state.concat(action.todos.map((todo) => todo.id));
        default:
            return state;
    }
}

function idsByPage(state = {}, action) {
    switch (action.type) {
        case 'RECEIVE_TODOS':
            return {
                ...state,
                [action.page] : action.todos.map((todo) => todo.id)
            };
        default:
            return state;
    }
}
function currentPage(state = 1, action) {
    switch (action.type) {
        case 'SET_PAGE':
            return action.page;
        default:
            return state;
    }
}

export function getAllTodos(todos) {
    return todos.allIds.map(function(id) {
        return todos.byId[id];
    });
}

export function getAllTodosByPage(todos) {
    if (!todos.currentPage || !todos.idsByPage[todos.currentPage]) {
        return getAllTodos(todos);
    }

    return todos.idsByPage[todos.currentPage].map((id) => todos.byId[id]);
}

export default function todos(state = {}, action) {
    return {
        byId: byId(state.byId, action),
        allIds: allIds(state.allIds, action),
        idsByPage: idsByPage(state.idsByPage, action),
        currentPage: currentPage(state.currentPage, action)
    };
}
