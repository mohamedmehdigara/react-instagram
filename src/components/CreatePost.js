import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = ({ onPostCreated }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      title,
      body
    };

    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then(response => {
        const newPost = response.data;
        onPostCreated(newPost);
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="create-post">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              value={body}
              onChange={e => setBody(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
