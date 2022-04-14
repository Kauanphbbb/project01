import { render, screen } from '@testing-library/react';
import { PostCard } from '.';

const props = {
  title: 'title 1',
  body: 'body 1',
  id: 1,
  cover: 'img/img.png',
};

describe('<PostCard />', () => {
  it('Should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover);

    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();

    expect(screen.getByText(props.body)).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
