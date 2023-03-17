import React from 'react';

import Dropdown from '../components/Dropdown'
import DropdownMDX from './docs/DropdownMDX.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      page: DropdownMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example = () => {
  const options = ['Apple', 'Banana', 'Peach', 'Kiwi', 'Orange']

  return (
    <Dropdown options={options} />
  )
};
Example.parameters = {
  docs: {
    source: {
      code: '<h1>Hello world</h1>',
      language: "yml",
      type: "auto",
    },
  },
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
