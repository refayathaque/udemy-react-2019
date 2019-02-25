import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

// Functional Component
const App = () => {

  return (
    <div className="ui container comments">
      <CommentDetail authorNickname="Sam" authorNicknameBackwards="Mas" avatar={faker.image.avatar()} />
      <CommentDetail authorNickname="Alex" authorNicknameBackwards="Xela" avatar={faker.image.avatar()} />
      <CommentDetail avatar={faker.image.avatar()} />
      <CommentDetail authorNickname="Saeed" authorNicknameBackwards="Deeas" avatar={faker.image.avatar()} />
      <CommentDetail authorNickname="Dost" authorNicknameBackwards="Tsod" avatar={faker.image.avatar()} />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
