import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'

function AuthorQuiz(props){
    var sum = props.num1 + props.num2;
    return <h4>Hello React with Bootstrap, {props.num1} + {props.num2} is {sum} </h4>
}

export default AuthorQuiz;
