export function loadTodos(page) {
    return new Promise((resolve, reject) => {
        switch (page){
            case 2:
                return resolve([{ id: 5, text: 'Drink milk' }, { id: 6, text: 'Play football' }, { id: 7, text: 'Buy foods' }, { id: 8, text: 'Ahihi' }]);
            case 3:
                return resolve([{ id: 9, text: 'Check mails' }, { id: 10, text: 'Meet my friends' }, { id: 11, text: 'Di nhau' }, { id: 12, text: 'Viet code' }]);
            case 1:
                return resolve([{ id: 1, text: 'Learn' }, { id: 2, text: 'Work' }, { id: 3, text: 'Eat' }, { id: 4, text: 'Drink' }]);
            default:
                reject('Page not found');
        }
    });
}
