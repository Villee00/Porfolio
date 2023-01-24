import {render, screen} from '@testing-library/react';
import React from 'react';

import Navigation from '../src/components/common/Navigation';

describe('Navigation', () => {
    it('renders navigation', () => {
        render(<Navigation/>);

        const element = screen.getByTestId('navigation')
        expect(element).toBeDefined()
        expect(screen.getAllByText("Home").length).toBe(2)
        expect(screen.getAllByText("About").length).toBe(2)
        expect(screen.getAllByText("Projects").length).toBe(2)
        expect(screen.getAllByText("Skills").length).toBe(2)
    });
});

