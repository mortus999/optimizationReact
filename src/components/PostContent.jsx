import React from 'react';


const PostContent = React.memo(({ content }) => {
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
    </div>
  );
});

export default PostContent;
