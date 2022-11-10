import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'react', done: true },
      { id: 2, name: 'vue', done: true },
      { id: 3, name: 'angluar', done: true },
    ]
  }
  addTodo = (todoItem)=>{
    this.setState({todos:[todoItem,...this.state.todos]})
  }
  updateTodo =(id,done)=>{
    const {todos} = this.state
    let newTodos = todos.map(item =>{
      if(item.id === id){
        return {...item,done}
      }else return item
    })
    this.setState({todos:newTodos})
  }
  deleteTodo = (id)=>{
    const {todos} = this.state
    let i = todos.findIndex(item=>{
      return item.id === id
    })
    todos.splice(i,1)
    this.setState({todos:todos})
  }
  checkAllTodo = (done)=>{
    const {todos} = this.state
    todos.forEach(item=>{
      item.done = done
    })
    console.log(todos);
    console.log(this.state);
    return
    this.setState({todos:todos})

  }
  clearAllDone =()=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		this.setState({todos:newTodos})
  }
  render(){
    const {todos} = this.state
    return(
      <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
      </div>
    </div>
    )
  }
}

export default App;
