import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { postsData } from '../data/posts';

export const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const post = postsData.find((p) => p.id === postId);

  const [likes, setLikes] = useState<number>(0);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Post Not Found</h2>
        <p>No post exists with ID #{id}.</p>
        <Link to="/posts">Back to all posts</Link>
      </div>
    );
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }
  };

  return (
    <article>
      <h1>{post.title}</h1>
      <p><em>By {post.author} on {post.date}</em></p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{post.content}</p>

      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Like ({likes})
      </button>

      <section style={{ marginTop: '2rem' }}>
        <h3>Comments ({comments.length})</h3>
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            style={{ padding: '0.5rem', width: '70%', marginRight: '0.5rem' }}
          />
          <button type="submit">Add Comment</button>
        </form>
        <ul style={{ marginTop: '1rem' }}>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </section>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/posts">← Back to Posts</Link>
      </div>
    </article>
  );
};