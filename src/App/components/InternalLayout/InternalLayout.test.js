import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InternalLayout from './InternalLayout';

describe('<InternalLayout />', () => {
  test('it should mount', () => {
    render(<InternalLayout />);
    
    const internalLayout = screen.getByTestId('InternalLayout');

    expect(internalLayout).toBeInTheDocument();
  });
});