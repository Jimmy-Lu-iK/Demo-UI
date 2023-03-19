import React from 'react';

import VirtualList from '../components/VirtualList'
import VirtualListMDX from './docs/VirtualListMDX.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/VirtualList',
  component: VirtualList,
  parameters: {
    docs: {
      page: VirtualListMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Instance = () => <VirtualList itemSize={100} />
// More on args: https://storybook.js.org/docs/react/writing-stories/args
