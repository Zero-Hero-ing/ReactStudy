import React,{Component} from 'react'
import wellcome from './index.module.css'

export default class Wellcom extends Component {
  render() {
    return <h2 className = {wellcome.title}>Wellcome to IBM!</h2>
  }
}