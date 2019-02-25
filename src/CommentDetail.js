import React from 'react';
import faker from 'faker';

// Functional Component
const CommentDetail = (props) => {

  const pastDate = faker.date.past().toString()
  const name = faker.name.firstName() + " " + faker.name.lastName()
  const loremComment = faker.lorem.sentence()

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {name}, "{props.authorNickname}"
        </a>
        <div className="metadata">
          <span className="date">
            {pastDate}
          </span>
        </div>
        <div className="text">
          {loremComment}, {props.comment}
        </div>
      </div>
    </div>
  )
}

export default CommentDetail;
