const _DEFAULT = {
    todos: [],
    counter: 0
};

function todos(state = [], action) {
    switch (action.type) {
        case "LOAD_ITEM":
            return state.concat(action.todos);
        default:
            return state;
    }
}

function counter(state = 0, action) {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        default:
            return state;
    }
}

export default function(state = _DEFAULT, action) {
    return {
        ...state,
        todos: todos(state.todos, action),
        counter: counter(state.counter, action)
    };
}
