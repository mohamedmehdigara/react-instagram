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

  const handleLike = (postId) => {
    // Send a request to like the post
    axios.post(`https://api.example.com/posts/${postId}/like`)
      .then(response => {
        // Update the liked state of the post
        setPosts(prevPosts =>
          prevPosts.map(post =>
            post.id === postId ? { ...post, liked: true } : post
          )
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleComment = (postId, comment) => {
    // Send a request to add a comment to the post
    axios.post(`https://api.example.com/posts/${postId}/comments`, { comment })
      .then(response => {
        // Update the comments array of the post
        setPosts(prevPosts =>
          prevPosts.map(post =>
            post.id === postId ? { ...post, comments: [...post.comments, response.data] } : post
          )
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="feed">
      <h2>Feed</h2>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
            <div className="actions">
              <button onClick={() => handleLike(post.id)}>{post.liked ? 'Unlike' : 'Like'}</button>
              <input type="text" placeholder="Add a comment" onChange={(e) => handleComment(post.id, e.target.value)} />
            </div>
            <div className="comments">
              {post.comments.map(comment => (
                <p key={comment.id}>{comment.body}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
