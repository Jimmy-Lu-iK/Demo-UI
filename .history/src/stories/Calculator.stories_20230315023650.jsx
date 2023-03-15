import React from 'react';

import Calculator from '../components/Calculator'
import CalculatorMDX from './docs/CalculatorMDX.md'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Calculator',
  component: Calculator,
  parameters: {
    docs: {
      page: CalculatorMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example = () => <Calculator />
// More on args: https://storybook.js.org/docs/react/writing-stories/args
