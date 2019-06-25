import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function Greet(props){
  return <h3>Hello {props.name}, how you doin ?</h3>
}

ReactDOM.render(<Greet name={'Nathaniel'} />,document.getElementById('root'));
