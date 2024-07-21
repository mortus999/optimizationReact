import React, { useMemo } from 'react';
import PostContent from './PostContent';

const PostList = ({ posts, selectedUserId }) => {
  const filteredPosts = useMemo(() => {
    return posts.filter(post => post.userId === selectedUserId);
  }, [posts, selectedUserId]);

  return (
    <div>
      {filteredPosts.map(post => (
        <PostContent key={post.id} content={post} />
      ))}
    </div>
  );
};

export default PostList;
