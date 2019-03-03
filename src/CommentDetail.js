import React from 'react';
import faker from 'faker';

// Functional Component
const CommentDetail = (props) => {

  // https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98fz
  const { authorNickname = "Josh", authorNicknameBackwards = "Hsoj", avatar } = props;
  // Example of Default Props, used in the event that the expected props are not passed in by the parent component

  const pastDate = faker.date.past().toString();
  const name = faker.name.firstName() + " " + faker.name.lastName();
  const loremComment = faker.lorem.sentence();

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar}/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {name}, "{authorNickname}"
        </a>
        <div className="metadata">
          <span className="date">
            {pastDate}
          </span>
        </div>
        <div className="text">
          {loremComment}, {authorNicknameBackwards}
        </div>
      </div>
    </div>
  );
}

export default CommentDetail;
