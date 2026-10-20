import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router';
import { PostCard } from './components/PostCard';
import { Posts } from './pages/Posts';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { postsData } from './data/posts';

describe('Blog Application Tests', () => {
  it('increments like count when like button is clicked', async () => {
    const user = userEvent.setup();
    const testPost = postsData[0];

    render(
      <MemoryRouter>
        <PostCard post={testPost} />
      </MemoryRouter>
    );

    const likeButton = screen.getByRole('button', { name: new RegExp(`Like ${testPost.title}`, 'i') });
    expect(likeButton).toHaveTextContent('❤️ Like (0)');

    await user.click(likeButton);
    expect(likeButton).toHaveTextContent('❤️ Like (1)');
  });

  it('renders correct number of post cards from data array', () => {
    render(
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    );

    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.length).toBe(postsData.length);
  });

  it('redirects to sign-in page when user is not authenticated', () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={['/protected']}>
          <ProtectedRoute />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.queryByText('Welcome! This page is only visible to signed-in users.')).not.toBeInTheDocument();
  });
});