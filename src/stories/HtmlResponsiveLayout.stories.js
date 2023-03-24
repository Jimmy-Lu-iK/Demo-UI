import React from 'react';
import HtmlResponsive from './HtmlResponsiveLayout';
import HtmlResponsiveLayoutMDX from './docs/HtmlResponsiveLayoutMDX.mdx'

export default {
  title: 'HTML/ResponsiveDesign',
  component: HtmlResponsive,
  parameters: {
    docs: {
      page: HtmlResponsiveLayoutMDX,
    },
  },
};

const Template = (args) => <HtmlResponsive {...args} />;

export const ResponsiveDesignLayout = Template.bind({});