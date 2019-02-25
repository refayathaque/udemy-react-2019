import React from 'react';
import ReactDOM from 'react-dom';

// const App = function() {
//   return <div>Hi there!</div>
// };

// Latest ES6 way of writing a function - "Arrow" function
const App = () => {
  return <div>Hi there!</div>
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
