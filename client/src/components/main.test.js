import React from 'react';
import { render } from '@testing-library/react';
import Stanko from './main';
import Header from './Header';


// Test cases start
it('renders without crashing', () => {
    render(<Stanko />);

});

describe('Header display name and position title', () => {

    it('Heading should display name', () => {
        // pass in with props
        const { getByText } = render(<Header name="stanislav zaichenko" />);
        expect(getByText(/stanislav zaichenko/i)).toBeTruthy();

    });

    it('Heading should display position', () => {
        // pass in with props
        const { getByText } = render(<Header position="front end developer" />);
        expect(getByText(/front end developer/i)).toBeTruthy();

    });

});


// describe('')
// test('renders learn react link', () => {
//   const { getByText } = render(<Stanko />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
