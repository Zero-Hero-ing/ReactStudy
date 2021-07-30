import React, { Component } from 'react';
import './index.css'

class Footer extends Component {
  handleCheckAll=(event)=>{
    this.props.checkAll(event.target.checked)
  }

  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }

  render() {
    let {todos,checkAll} = this.props
    let haveDone = todos.reduce((pre,current)=>{return pre+(current.done?1:0)},0)
    let total = todos.reduce((pre,curr)=>pre+1,0)

    return (
      <div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheckAll} checked={total===haveDone && total!==0?true:false}/>
				</label>
				<span>
					<span>已完成{haveDone}</span> / 全部{total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
    );
  }
}

export default Footer;