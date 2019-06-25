import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

describe("AuthorQuiz", () => {
  test("it renders without crashing", () => {
    let div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz />,div);
  })
});