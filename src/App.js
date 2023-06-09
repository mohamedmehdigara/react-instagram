// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

const App = () => {
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
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/" element={() => <Posts posts={Posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
