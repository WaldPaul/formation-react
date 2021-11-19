import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Grc-templates/reduc_func/TemplateName.js from './Grc-templates/reduc_func/TemplateName.js';

describe('<Grc-templates/reduc_func/TemplateName.js />', () => {
  test('it should mount', () => {
    render(<Grc-templates/reduc_func/TemplateName.js />);
    
    const grcTemplatesReducFuncTemplateNameJs = screen.getByTestId('Grc-templates/reduc_func/TemplateName.js');

    expect(grcTemplatesReducFuncTemplateNameJs).toBeInTheDocument();
  });
});