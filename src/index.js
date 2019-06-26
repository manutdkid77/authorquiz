import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import './index.css';
import PropTypes from 'prop-types';
import { shuffle, sample } from 'underscore';

const authors = [
  {
    name: "Eoin Colfer",
    imageUrl: "images/authors/eoincolfer.jpg",
    imageSource: "Wikimedia Commons",
    books: ['Artemis Fowl', 'Artemis Fowl 1', 'Artemis Fowl 2', 'Artemis Fowl 3']
  },
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];

function getTurnData(authors) {
  //reduce function has 2 arguments, the callback fn and the initial value for accumulator

  //create an arr containing list of all books of all authors
  const allBooks = authors.reduce(function (acc, curr, index) {
    return acc.concat(curr.books);
  }, []);

  console.log(allBooks);
  console.log(shuffle(allBooks));

  //shuffle the books, and take 4 books
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  //randomly get 1 book from the collection of 4 books
  const correctTitle = sample(fourRandomBooks);

  //find the author whose books collection has a book that matches correctTilte
  let correctAuthor = authors.find(o =>
    o.books.some((title) =>
      title === correctTitle));

  return {
    author: correctAuthor,
    books: fourRandomBooks
  };
}

const state = {
  turnData: getTurnData(authors)
}

ReactDOM.render(<AuthorQuiz {...state}></AuthorQuiz>, document.getElementById('root'));