import React from 'react';
import ReactDOM from 'react-dom';

const getTime = () => {
  return (
    new Date().toLocaleTimeString()
  )
}

// Functional Component
const App = () => {
  const text = {text: 'Current Time:'}
  return (
    <div>
      <div>{text.text}</div>
      <h3>{getTime()}</h3>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
