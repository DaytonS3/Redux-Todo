import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from './components/Action';
import './App.css';


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

  HandleTodo = id => {
      this.props.toggleTodo(id);
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
          <h1 onClick={() => this.HandleTodo(item.id)} style={{
            textDecoration: item.completed ? 'line-through' : 'none'}}
            >{item.todo}</h1>
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
  MapStateToProps,{addTodo, toggleTodo}
) (App);
