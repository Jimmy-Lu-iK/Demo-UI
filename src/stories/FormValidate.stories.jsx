import React from 'react';

import FormValidate from '../components/FormValidate'
import FormValidateMDX from './docs/FormValidateMDX.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FormValidate',
  component: FormValidate,
  parameters: {
    docs: {
      page: FormValidateMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Instance = () => <FormValidate />
// More on args: https://storybook.js.org/docs/react/writing-stories/args
