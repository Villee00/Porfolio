import {render, screen} from '@testing-library/react';
import React from 'react';
import Footer from "../../src/components/common/Footer";

describe('Footer', () => {
    it('renders Footer', () => {
        render(<Footer/>);

        const element = screen.getByTestId('footer')
        expect(element).toBeDefined()
        expect(screen.getByLabelText("GitHub")).toBeDefined()
        expect(screen.getByLabelText("LinkedIn")).toBeDefined()
    });
});

