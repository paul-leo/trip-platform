import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomeRoot } from './home-root.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicHomeRoot />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
