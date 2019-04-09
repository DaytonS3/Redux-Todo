import React from 'react';
import {Add_Todo, TOGGLE_TODO} from './Action';

let initialState = {
  
  todos: [
    {
      id: 1,
      todo: 'Wash Car',
      completed: false
    }
  ]
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case Add_Todo:
        return {
          todos: [...state.todos, {id: Date.now(), todo: action.payload, completed: false} ]
        };
        case TOGGLE_TODO:
          return {
            ...state,
            todos: state.todos.map(todo =>{
              if(todo.id === action.payload) {
                return {
                  ...todo,
                  completed: !todo.completed
                }
              }else {
                return todo
              }
            })
          }
      default:
        return state;
    }
  };
  
  export default reducer;
  