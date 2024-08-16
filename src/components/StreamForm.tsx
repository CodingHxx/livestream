"use client"
import React, { useState } from 'react';

// Define types for the component state
interface FormData {
  title: string;
  content: string;
  postLink: string;
  postImage: string;
}

const CreatePost: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    postLink: '',
    postImage: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSuccess('Post created successfully!');
      setFormData({ title: '', content: '', postLink: '', postImage: '' }); // Clear form
    } catch (err) {
      setError('Failed to create post');
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="postLink">Post Link</label>
          <input
            type="text"
            id="postLink"
            name="postLink"
            value={formData.postLink}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </div>
        <div>
          <label htmlFor="postImage">Post Image URL</label>
          <input
            type="text"
            id="postImage"
            name="postImage"
            value={formData.postImage}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default CreatePost;
