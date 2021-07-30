import React, { Component } from 'react';
import './index.css'

class Item extends Component {

  state = {mouse:false}

  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

  handleMouseEnter = ()=>{
    this.setState({mouse:true})
  }

  handleMouseLeave = ()=>{
    this.setState({mouse:false})
  }

  handleDelTodo =(id)=>{
    return ()=>{
      this.props.deleteTodo(id)
    }
  }
  render() {
    let {id,name,done} = this.props
    let {mouse} = this.state
    return (
      <li style={{background:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
					<span>{name}</span>
				</label>
				<button className="btn btn-danger" style={{display:mouse?'block':'none'}} onClick ={this.handleDelTodo(id)}>删除</button>
			</li>
    );
  }
}

export default Item;