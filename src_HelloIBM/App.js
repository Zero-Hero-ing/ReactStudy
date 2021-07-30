import React, { Component } from 'react'
import Hello from './components/Hello'
import Wellcom from './components/Wellcom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
        <Wellcom/>
      </div>
    )
  }
}
