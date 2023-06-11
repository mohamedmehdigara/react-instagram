import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get(`https://api.example.com/users/${userId}`)
      .then(response => {
        const userData = response.data;
        setUser(userData);
        setUsername(userData.username);
        setBio(userData.bio);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`https://api.example.com/users/${userId}/posts`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedUser = { ...user, username, bio };

    axios.put(`https://api.example.com/users/${userId}`, updatedUser)
      .then(response => {
        setUser(updatedUser);
        setIsEditing(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h2>{user.username}</h2>

      {isEditing ? (
        <div>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <textarea
            value={bio}
            onChange={e => setBio(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Bio: {user.bio}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}

      <img src={user.profilePicture} alt={user.username} />

      <h3>My Posts</h3>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
