import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Fetch user data and posts based on the username
    // You can make an API request here to fetch the user and their posts
    // Update the setUser and setPosts states with the fetched data
    // For demonstration purposes, I'm using dummy data here

    const fetchUserData = async () => {
      // Fetch user data
      const userResponse = await fetch(`https://api.example.com/users?username=${username}`);
      const userData = await userResponse.json();
      setUser(userData);

      // Fetch user's posts
      const postsResponse = await fetch(`https://api.example.com/posts?userId=${userData.id}`);
      const postsData = await postsResponse.json();
      setPosts(postsData);
    };

    fetchUserData();
  }, [username]);

  const handleFollow = () => {
    // Implement logic to follow/unfollow the user
    // You can make an API request here to update the user's followers/following
    // Update the isFollowing state accordingly
    // For demonstration purposes, I'm toggling the isFollowing state
    setIsFollowing(prevState => !prevState);
  };

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div>
      <h2>{user.username}</h2>
      <img src={user.profilePicture} alt="Profile" />
      <p>{user.bio}</p>

      {isFollowing ? (
        <button onClick={handleFollow}>Unfollow</button>
      ) : (
        <button onClick={handleFollow}>Follow</button>
      )}

      <h3>Posts</h3>
      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;


