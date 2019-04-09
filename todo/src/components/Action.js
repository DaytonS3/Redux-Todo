export const Add_Todo = 'Add_Todo';
export const TOGGLE_TODO ='TOGGLE_TODO'

export function addTodo(todo) {
    console.log(todo)
    return {
        type: 'Add_Todo',
        payload: todo
    }
}

export const toggleTodo =(id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}
