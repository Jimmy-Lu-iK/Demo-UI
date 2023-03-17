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

export const Instance = () => {
  const options = ['Apple', 'Banana', 'Peach', 'Kiwi', 'Orange']

  return (
    <Dropdown options={options} />
  )
};
