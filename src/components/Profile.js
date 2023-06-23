import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CreatePost from './CreatePost';

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [createdPosts, setCreatedPosts] = useState([]);


  useEffect(() => {
    axios
      .get(`https://api.example.com/users/${userId}`)
      .then((response) => {
        const userData = response.data;
        setUser(userData);
        setUsername(userData.username);
        setBio(userData.bio);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedUser = { ...user, username, bio };

    axios
      .put(`https://api.example.com/users/${userId}`, updatedUser)
      .then((response) => {
        setUser(updatedUser);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreatePost = (newPost) => {
    setCreatedPosts((prevPosts) => [...prevPosts, newPost]);
  };

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="profile">
      {/* Existing code */}
      <CreatePost handleCreatePost={handleCreatePost} />
      <h3>My Posts</h3>
      <div className="post-list">
        {/* Render the posts */}
        {createdPosts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Profile;
