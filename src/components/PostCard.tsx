import React, { useState } from 'react';
import { Link } from 'react-router';
import type { Post } from '../types/blog';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [likes, setLikes] = useState<number>(0);

  return (
    <article style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3>{post.title}</h3>
      <p><em>By {post.author} on {post.date}</em></p>
      <p>{post.excerpt}</p>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to={`/posts/${post.id}`}>Read More</Link>
        <button onClick={() => setLikes(likes + 1)} aria-label={`Like ${post.title}`}>
          ❤️ Like ({likes})
        </button>
      </div>
    </article>
  );
};