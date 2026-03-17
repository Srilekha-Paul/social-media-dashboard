import { render, screen, fireEvent } from '@testing-library/react';
import Post from '../src/components/Post/Post';

const mockPost = {
  id: 1,
  author: { name: 'Test User', username: '@test', avatar: '' },
  content: 'Hello world!',
  image: null,
  likes: 10,
  comments: 2,
  time: '1h ago'
};

test('renders post content', () => {
  render(<Post post={mockPost} />);
  expect(screen.getByText('Hello world!')).toBeInTheDocument();
});

test('like button increments count', () => {
  render(<Post post={mockPost} />);
  const likeBtn = screen.getByText(/🤍 10/);
  fireEvent.click(likeBtn);
  expect(screen.getByText(/❤️ 11/)).toBeInTheDocument();
});
