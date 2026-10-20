import type { Post } from '../types/blog';

export const postsData: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a robust web application using React and TypeScript.',
    content: 'TypeScript adds type safety to JavaScript, making your React components easier to maintain and refactor...',
    author: 'Tangirbergen',
    date: '2026-10-15',
  },
  {
    id: 2,
    title: 'Mastering React Router v6',
    excerpt: 'Understand dynamic routing, protected routes, and layouts in client-side apps.',
    content: 'React Router allows building single-page applications with seamless navigation without page reloads...',
    author: 'Tangirbergen',
    date: '2026-10-17',
  },
  {
    id: 3,
    title: 'Effective Component State Management',
    excerpt: 'Explore local state, Context API, and state isolation in React components.',
    content: 'Managing state locally ensures components remain modular and performant. Keeping state close to where it is used is key...',
    author: 'Tangirbergen',
    date: '2026-10-18',
  },
  {
    id: 4,
    title: 'Unit Testing React Apps with Vitest',
    excerpt: 'Write reliable unit tests with Vitest and React Testing Library.',
    content: 'Testing gives confidence in code stability. With Vitest and React Testing Library, simulation of user actions is straightforward...',
    author: 'Tangirbergen',
    date: '2026-10-19',
  },
  {
    id: 5,
    title: 'Deploying React Apps to GitHub Pages',
    excerpt: 'Step-by-step guide on publishing React applications to GitHub Pages.',
    content: 'By setting the base path and output directory to docs, deploying React apps to GitHub Pages becomes automated and effortless...',
    author: 'Tangirbergen',
    date: '2026-10-20',
  },
];