import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  it('renders navigation', () => {
    render(<Navigation />);

    const navigation = render(<Navigation />);
    expect(navigation.container).toHaveTextContent('Home');
    expect(navigation.container).toHaveTextContent('About');
    expect(navigation.container).toHaveTextContent('Projects');
  });
});
