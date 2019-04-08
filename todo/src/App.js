import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from './components/Action';

import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todo: ''
  }


  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    })
  }

  render() {
    console.log(this.props.todos)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          placeholder="New Todo"
          onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        {this.props.todos.map(item => (
                //console.log(item),
                <TodoList key={Math.random()} name={item.todo} 
                />
                ))}
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    todos: state.todos
    
  }
  
}


export default connect(
  MapStateToProps,{addTodo}
) (App);
