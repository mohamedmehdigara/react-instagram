import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = ({ currentUser, posts }) => {
  const { userId } = useParams();

  if (!currentUser) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div>
      <h2>{currentUser.username}</h2>
      <img src={currentUser.profilePicture} alt="Profile" />
      <p>{currentUser.bio}</p>

      {/* Render the posts */}
      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
