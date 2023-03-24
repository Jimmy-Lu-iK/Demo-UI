import React from 'react';
import HtmlResponsiveRem from './HtmlResponsiveRem';
import HtmlResponsiveRemMDX from './docs/HtmlResponsiveRemMDX.mdx'

export default {
  title: 'HTML/ResponsiveDesign',
  component: HtmlResponsiveRem,
  parameters: {
    docs: {
      page: HtmlResponsiveRemMDX,
    },
  },
};

const Template = (args) => <HtmlResponsiveRem {...args} />;

export const ResponsiveDesignRem = Template.bind({});