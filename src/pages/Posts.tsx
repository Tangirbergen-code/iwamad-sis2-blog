import React from 'react';
import { postsData } from '../data/posts';
import { PostCard } from '../components/PostCard';

export const Posts: React.FC = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};