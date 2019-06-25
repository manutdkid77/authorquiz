import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'

class AuthorQuiz extends Component {
  render(){
    var sum = this.props.num1 + this.props.num2;
    return <h4>Hello React with Bootstrap, {this.props.num1} + {this.props.num2} is {sum} </h4>
  }
}

export default AuthorQuiz;
