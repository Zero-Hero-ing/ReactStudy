import React,{Component} from 'react'
import './APP.css'
import Head from './components/Head'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component{

  //初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'打代码',done:false},
		{id:'004',name:'逛街',done:false}
  ]}
  //添加todoObj  子组件向父组件传递信息
  addTodo = (todoObj)=>{
      let {todos} = this.state
      let newTodos = [todoObj,...todos]
      //更新属性
      this.setState({todos:newTodos})
  }

  //更新选项状态 子组件向父组件传递信息
  updateTodo = (id,done)=>{
    let {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}
			else return todoObj
		})
		this.setState({todos:newTodos})
    // console.log(this.state.todos)//为什么放在这里输出的todos还是更新之前的todos
  }

  //全选
  checkAll = (status)=>{
    let {todos} = this.state
    let newTodos = todos.map((obj)=>{
      return {...obj,done:status}
    })
    this.setState({todos:newTodos})
  }

  //删除指定项
  deleteTodo = (id)=>{
    let {todos} = this.state
    let newTodos = todos.filter((obj)=>{
      return obj.id!==id
    })
    this.setState({todos:newTodos})
  }

  //删除已完成的项
  clearAllDone = ()=>{
    let {todos} = this.state
    let newTodos = todos.filter((obj)=>{
      if(obj.done) return false
      else return true
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    // console.log(todos)// 放在这里输出得就是更新之后的todos
    return(
      <div className="todo-container">
				<div className="todo-wrap">
					<Head addTodo = {this.addTodo}/>
					<List todos = {todos} updateTodo = {this.updateTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos = {todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
				</div>
			</div>
    )
  }
}