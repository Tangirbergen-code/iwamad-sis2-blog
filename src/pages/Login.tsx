import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/protected');
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <p>Please sign in to access the protected content.</p>
      <button onClick={handleLogin}>Click to Sign In</button>
    </div>
  );
};