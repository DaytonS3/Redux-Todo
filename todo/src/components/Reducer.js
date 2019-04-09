import React from 'react';
import {Add_Todo} from './Action';

let initialState = {
  
  todos: [
    {
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
          todos: [...state.todos, {todo: action.payload, completed: false} ]
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  