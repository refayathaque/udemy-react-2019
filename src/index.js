import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

// Functional Component
const App = () => {

  return (
    <div className="ui container comments">
      {/* Passing down an entire component as props, component passed down is the "child", and component receiving the component as props is the "parent" */}
      {/* Parent component receives props as props.children */}
      <ApprovalCard>
        <CommentDetail authorNickname="Sam" authorNicknameBackwards="Mas" avatar={faker.image.avatar()} />
        {/* Props above are called "Named Properties" */}
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
      {/* Can also pass down other things as props this way, will be received by parent component as props.children */}
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
