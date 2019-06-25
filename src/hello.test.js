import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
    return <h1>Hello {props.name}</h1>;
}

describe("basic test case", () => {
    test("should not fail", () => {
        expect(4).toBe(4);
    })
});

describe("Lets test directly", () => {
    let result;
    beforeAll(() => {
        result = Hello({ name: "Nathaniel" });
    });

    test("Checking if it is null", () => {
        expect(result).not.toBe(null);
    });

    test("Checking if it returns a h1 tag", () => {
        expect(result.type).toBe('h1');
    })

    test("Checking to be truthy", () => {
        expect(result.props.children).toBeTruthy();
    });
});

describe("Testing with ReactDOM", () => {
    it("if it renders without crashing", () => {
        let div = document.createElement('div');
        ReactDOM.render(<Hello name='{Nathaniel}'></Hello>, div);
    });
});