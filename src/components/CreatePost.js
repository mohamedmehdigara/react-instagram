import React, { useState } from 'react';

const CreatePost = ({ handleCreatePost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      id: Date.now(),
      title,
      body,
      caption,
      image,
    };

    // Call the handleCreatePost function passed from the parent component
    handleCreatePost(newPost);

    // Reset the form inputs
    setTitle('');
    setBody('');
  };

  return (
    <div className="create-post">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
