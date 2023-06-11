import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from followed users
    axios.get('https://api.example.com/feed/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="feed">
      <h2>Feed</h2>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
