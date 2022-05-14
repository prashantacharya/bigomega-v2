import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../components/Nav';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Nav />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
