import React from 'react';
import { render } from '@testing-library/react';
import Stanko from './main';

test('renders learn react link', () => {
  const { getByText } = render(<Stanko />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
