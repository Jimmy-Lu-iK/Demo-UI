import React from 'react';

import BarChartWithResize from '../components/BarChartWithResize'
import BarChartWithResizeMDX from './docs/BarChartWithResizeMDX.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/BarChartWithResize',
  component: BarChartWithResize,
  parameters: {
    docs: {
      page: BarChartWithResizeMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Instance = () => <BarChartWithResize />
// More on args: https://storybook.js.org/docs/react/writing-stories/args
