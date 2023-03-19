import React from 'react';

import LazyLoadImages from '../components/LazyLoadImages'
import LazyLoadImagesMDX from './docs/LazyLoadImagesMDX.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/LazyLoadImages',
  component: LazyLoadImages,
  parameters: {
    docs: {
      page: LazyLoadImagesMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Instance = () => <LazyLoadImages />
// More on args: https://storybook.js.org/docs/react/writing-stories/args
