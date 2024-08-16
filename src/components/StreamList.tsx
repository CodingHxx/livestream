"use client"
import React, { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
  postLink?: string;
  postImage?: string;
  createdAt: string;
};

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/streams');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load posts');
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.postLink && (
              <p>
                <a href={post.postLink} target="_blank" rel="noopener noreferrer">
                  {post.postLink}
                </a>
              </p>
            )}
            {post.postImage && (
              <img
                src={post.postImage}
                alt={post.title}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
              />
            )}
            <p>
              <small>Posted on {new Date(post.createdAt).toLocaleDateString()}</small>
            </p>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default HomePage;
