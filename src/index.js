import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import './index.css';
import PropTypes from 'prop-types';

AuthorQuiz.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired
};

const objNumbers = { num1 : 5, num2 : 10 };

ReactDOM.render(<AuthorQuiz {...objNumbers}></AuthorQuiz>,document.getElementById('root'));