import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <div className="container">
        {posts.length > 0 ? (
          posts.map(post => (
            <Link to={`/post/${post.id}`} key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Link>
          ))
        ) : (
          <Skeleton count={5} height={80} />
        )}
      </div>
    </div>
  );
};

export default Posts;