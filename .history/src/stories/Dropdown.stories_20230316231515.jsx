import React from 'react';

import Dropdown from '../components/Dropdown'
import CalculatorMDX from './docs/CalculatorMDX.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Calculator',
  component: Calculator,
  parameters: {
    docs: {
      page: CalculatorMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Instance = () => {
  const options = ['Apple', 'Banana', 'Peach', 'Kiwi', 'Orange']

  return (
    <Dropdown options={options} />
  )
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
