import React, { useState } from 'react';

const UserProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    // Make an API request to update the follow status
    // and update the state accordingly
    setIsFollowing(true);
  };

  const handleUnfollow = () => {
    // Make an API request to update the follow status
    // and update the state accordingly
    setIsFollowing(false);
  };

  return (
    <div className="user-profile">
      {/* Render user profile information */}
      <h1>User Profile</h1>
      {/* Render other profile details */}
      
      {/* Render follow/unfollow button */}
      {isFollowing ? (
        <button onClick={handleUnfollow}>Unfollow</button>
      ) : (
        <button onClick={handleFollow}>Follow</button>
      )}
    </div>
  );
};

export default UserProfile;
