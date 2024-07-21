import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import UserSelector from './components/UserSelector';



const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      const postsData = await fetchData('https://jsonplaceholder.typicode.com/posts');
      const usersData = await fetchData('https://jsonplaceholder.typicode.com/users');
      setPosts(postsData);
      setUsers(usersData);
    };

    fetchPostsAndUsers();
  }, []);

  const handleSelectUser = (userId) => {
    setSelectedUserId(parseInt(userId, 10));
  };

  return (
    <div>
      <UserSelector users={users} onSelectUser={handleSelectUser} />
      <PostList posts={posts} selectedUserId={selectedUserId} />
    </div>
  );
};

export default App;
