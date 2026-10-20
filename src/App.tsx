import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { PostDetail } from './pages/PostDetail';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Protected } from './pages/Protected';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="protected" element={<Protected />} />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;