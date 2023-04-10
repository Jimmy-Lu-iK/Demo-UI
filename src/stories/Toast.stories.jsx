import React from 'react';

import ToastExamples from '../components/ToastExamples'
import ToastExamplesMDX from './docs/ToastExamplesMDX.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Toast',
  component: ToastExamples,
  parameters: {
    docs: {
      page: ToastExamplesMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Instance = () => <ToastExamples />
// More on args: https://storybook.js.org/docs/react/writing-stories/args
