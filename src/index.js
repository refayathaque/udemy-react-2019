import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const text = {text: 'Hi there!'}
  return (
    <div>
      {text.text}
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
