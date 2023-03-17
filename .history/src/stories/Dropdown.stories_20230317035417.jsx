import React from 'react';

import Dropdown from '../components/Dropdown'
import DropdownMDX from './docs/DropdownMDX.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    // docs: {
    //   page: DropdownMDX,
    // },
    docs: {
      source: {
        code: 'var a = 10',
        language: "js",
        type: "auto",
      },
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
Instance.parameters = {
  docs: {
    source: {
      code: '<h1>Hello world</h1>',
      language: "html",
      type: "auto",
    },
  },
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
