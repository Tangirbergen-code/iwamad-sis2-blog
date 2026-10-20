import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

export const Layout: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#007bff' : '#333',
    textDecoration: 'none',
  });

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <header style={{ borderBottom: '1px solid #ddd', paddingBottom: '1rem', marginBottom: '1rem' }}>
        <h2>My SIS2 Blog</h2>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <NavLink to="/" style={getNavLinkClass}>Home</NavLink>
          <NavLink to="/posts" style={getNavLinkClass}>Posts</NavLink>
          <NavLink to="/protected" style={getNavLinkClass}>Protected</NavLink>
          <NavLink to="/contact" style={getNavLinkClass}>Contact</NavLink>
          {isAuthenticated ? (
            <button onClick={logout} style={{ marginLeft: 'auto' }}>Sign Out</button>
          ) : (
            <NavLink to="/login" style={{ ...getNavLinkClass({ isActive: false }), marginLeft: 'auto' }}>Sign In</NavLink>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer style={{ marginTop: '2rem', borderTop: '1px solid #ddd', paddingTop: '1rem', textAlign: 'center' }}>
        <p>© 2026 Tangirbergen Baichalov. All rights reserved.</p>
      </footer>
    </div>
  );
};