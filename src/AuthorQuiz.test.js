import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

//create a dummy state
const state = {
  turnData: {
    author: {
      name: 'J.K. Rowling',
      imageUrl: 'images/authors/jkrowling.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Daniel Ogren',
      books: ['Harry Potter and the Sorcerers Stone']
    },
    books: ['Hamlet', 'IT', 'Harry Potter and the Sorcerers Stone', 'The Adventures of Huckleberry Finn']
  },
  highlight: 'none'
};

describe("AuthorQuiz", () => {
  test("it renders without crashing", () => {
    let div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => { }} />, div);
  })

  describe("when no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => { }}></AuthorQuiz>);
    });

    test("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    });
  });

  describe("when the wrong answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...Object.assign({}, state, { highlight: 'wrong' })} onAnswerSelected={() => { }}></AuthorQuiz>)
    });
    test("should have a red background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
    })
  });

  describe("when the correct answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...Object.assign({}, state, { highlight: 'correct' })} onAnswerSelected={() => { }}></AuthorQuiz>)
    });
    test("should have a green background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
    })
  });

  //event based tests
  describe("when the first answer is selected", () => {
    let wrapper;
    //create a mock fn to pass as callback for onAnswerSelected
    const handleAnswerSelected = jest.fn();
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected}></AuthorQuiz>);
      wrapper.find('.answer').first().simulate('click');
    });

    test("onAnswerSelected should be called", () => {
      //this will check if function is called on click of first answer
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    test("selected answer should be Hamlet",()=>{
      expect(handleAnswerSelected).toHaveBeenCalledWith('Hamlet');
    });
  });

});