import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../components/Nav';

jest.mock('next/router', () => ({
  useRouter: () => ({ pathname: '/' }),
}));

describe('Home', () => {
  it('renders a heading', () => {
    render(<Nav />);

    expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
  });
});
