// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

const App = () => {
  const Posts = ""
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/create" element={<CreatePost/>}/>
            
            
          
          <Route path="/post/:id" elemnt={<Post/>}/>
            
          
          <Route path="/" element={<Posts/>}/>
            
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
