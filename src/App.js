// src/App.js
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Feed from './components/Feed';
import Signup from './components/Signup';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import "./App.css";




const App = () => {
  
  const [ setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  // Rest of your code
  
  const Posts = [
    {
      id: 1,
      title: "First Post",
      body: "This is the first post."
    },
    {
      id: 2,
      title: "Second Post",
      body: "This is the second post."
    },
    {
      id: 3,
      title: "Third Post",
      body: "This is the third post."
    }
  ];
  
let Postslength = undefined;

// Check if "arr" is truthy
if (Posts) {
  Postslength = Posts.length;
}

console.log(Postslength); // undefined
const currentUser = {
  id: '123',
  username: 'john_doe',
  // Add other user properties as needed
};
useEffect(() => {
  // Fetch the user and post data here
  fetchUser();
  fetchPosts();
}, []);


const fetchUser = async () => {
  try {
    const response = await axios.get('https://api.example.com/currentUser');
    setCurrentUser(response.data);
  } catch (error) {
    console.error(error);
  }
};

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://api.example.com/posts');
    setPosts(response.data);
  } catch (error) {
    console.error(error);
  }
};

const handleCreatePost = (newPost) => {
  // Add the new post to the posts state
  setPosts((prevPosts) => [...prevPosts, newPost]);
};
  return (
    <Router>
      <div className="app">
        <Header currentUser={currentUser} />
        <Routes>
        <Route path="/create" element={<CreatePost handleCreatePost={handleCreatePost} />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/" element={() => <Posts posts={Posts} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/" element={<Feed />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:username" element={<UserProfile />} />






        </Routes>
      </div>
    </Router>
  );
};

export default App;
