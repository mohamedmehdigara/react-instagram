import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = ({ currentUser, posts }) => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Simulating fetching user data and user posts based on userId
    const fetchUserData = async () => {
      try {
        // Fetch user data
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const userData = await response.json();
        setUser(userData);

        // Fetch user's posts
        const postsResponse = await fetch(`https://api.example.com/users/${userId}/posts`);
        const postsData = await postsResponse.json();
        setUserPosts(postsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [userId]);

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div>
      <h2>{user.username}</h2>
      <img src={user.profilePicture} alt="Profile" />
      <p>{user.bio}</p>

      {/* Render the user's posts */}
      <h3>Posts</h3>
      {userPosts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
