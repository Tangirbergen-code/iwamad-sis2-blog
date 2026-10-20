import React from 'react';
import { Link } from 'react-router';

export const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};