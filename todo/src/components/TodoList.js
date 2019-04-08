import React from 'react';

const TodoList = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default TodoList;