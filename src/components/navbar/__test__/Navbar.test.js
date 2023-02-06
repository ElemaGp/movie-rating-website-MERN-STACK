import { render, screen } from '@testing-library/react';
import Navbar from "../Navbar"

test('renders the word MRating', () => {
    render(<Navbar />);
    const textElement = screen.getByText(/MRating/i);
    expect(textElement).toBeInTheDocument();
});