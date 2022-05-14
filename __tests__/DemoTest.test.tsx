import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Test from '../components/DemoTest';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Test />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
