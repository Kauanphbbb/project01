import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

const user = userEvent.setup();

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="testing" />);

    const input = screen.getByPlaceholderText(/type to search/i);

    expect(input.value).toBe('testing');
  });

  it('should call handle change function on each key pressed', async () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="value" />);

    const input = screen.getByPlaceholderText(/type to search/i);

    const value = 'the value';

    await user.type(input, value);

    expect(input.value).toBe('value');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', async () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue="value" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
