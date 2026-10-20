import React from 'react';
import { Link } from 'react-router';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>This is a component-based web application built with React, TypeScript, and React Router for SIS 2.</p>
      <Link to="/posts">Explore Posts</Link>
    </div>
  );
};