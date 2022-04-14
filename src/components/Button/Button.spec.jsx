import { Button } from '.';

import { fireEvent, render, screen } from '@testing-library/react';

describe('<Button />', () => {
  it("should render the button with the text 'load more'", () => {
    const fn = jest.fn();

    render(<Button text="load more" onClick={fn} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();

    render(<Button text="load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled if disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled if disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<Button text="load more" disabled={false} onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
