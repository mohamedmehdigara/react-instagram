import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { getPosts } from '../api';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="posts">
      <div className="container">
        {isLoading ? (
          <Skeleton count={5} height={80} />
        ) : (
          posts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
