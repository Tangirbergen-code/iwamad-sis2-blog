import React from 'react';

export const Protected: React.FC = () => {
  return (
    <div>
      <h1>Protected Dashboard</h1>
      <p>Welcome! This page is only visible to signed-in users.</p>
    </div>
  );
};