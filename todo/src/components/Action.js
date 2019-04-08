export const Add_Todo = 'Add_Todo';

export function addTodo(todo) {
    return {
        type: 'Add_Todo',
        payload: todo
    }
}