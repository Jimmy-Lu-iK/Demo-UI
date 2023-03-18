import React from 'react';

import SearchInput from '../components/SearchInput'
// import CalculatorMDX from './docs/CalculatorMDX.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    docs: {
      page: CalculatorMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Instance = () => <SearchInput />
// More on args: https://storybook.js.org/docs/react/writing-stories/args
