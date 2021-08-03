import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const todos = [
    {
        title: "Wash Car",
        id: 123,
        completed: false
    }
];

ReactDOM.render(<App />, document.getElementById('root'));
