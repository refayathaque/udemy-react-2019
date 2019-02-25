import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Functional Component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail authorNickname="Sam" comment="Mas" />
      <CommentDetail authorNickname="Alex" comment="Xela" />
      <CommentDetail authorNickname="Jane" comment="Enaj" />
      <CommentDetail authorNickname="Saeed" comment="Deeas" />
      <CommentDetail authorNickname="Dost" comment="Tsod" />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
