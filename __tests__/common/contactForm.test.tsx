import {render, screen} from '@testing-library/react';
import React from 'react';
import ContactForm from "../../src/components/common/ContactForm";

describe('ContactForm', () => {
    it('renders ContactForm', () => {
        render(<ContactForm/>);

        const element = screen.getByTestId('contactForm')
        expect(element).toBeDefined()
        expect(screen.getAllByText("CONTACT")).toBeDefined()
        expect(screen.getByPlaceholderText("Name")).toBeDefined()
        expect(screen.getByPlaceholderText("Enter email")).toBeDefined()
        expect(screen.getByPlaceholderText("Your Message")).toBeDefined()
    });
});

