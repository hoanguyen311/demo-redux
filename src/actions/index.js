export function loadTodos() {
    return {
        type: 'LOAD_ITEM',
        todos: [ 'Learn', 'Work', 'Eat', 'Drink' ]
    };
}

export function increase() {
    return {
        type: 'INCREASE'
    };
}
