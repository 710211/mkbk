import React, { Component } from 'react'
import Header from './components/Header'
import Middle from './components/Middle'
import Tailer from './components/Tailer'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Middle />
        <Tailer />
      </div>
    )
  }
}

