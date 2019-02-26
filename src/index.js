import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

// Functional Component
const App = () => {

  return (
    <div className="ui container comments">
      {/* Passing down an entire component as props, component passed down is child, and component receiving component as props is parent */}
      <ApprovalCard>
        <CommentDetail authorNickname="Sam" authorNicknameBackwards="Mas" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail authorNickname="Alex" authorNicknameBackwards="Xela" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail authorNickname="Saeed" authorNicknameBackwards="Deeas" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail authorNickname="Dost" authorNicknameBackwards="Tsod" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
