import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const props = {
  posts: [
    {
      title: 'title 1',
      body: 'body 1',
      id: 1,
      cover: 'img/img.png',
    },
    {
      title: 'title 2',
      body: 'body 2',
      id: 2,
      cover: 'img/img.png',
    },
    {
      title: 'title 3',
      body: 'body 3',
      id: 3,
      cover: 'img/img.png',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/title/i)).toHaveLength(3);
  });

  it('should not render posts', () => {
    render(<Posts />);

    expect(screen.queryAllByRole('heading', { name: /title/i })).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
