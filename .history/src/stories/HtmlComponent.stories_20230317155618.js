import React from 'react';
import HtmlComponent from './HtmlComponent';

export default {
  title: 'My HTML Page',
  component: HtmlComponent,
};

const Template = (args) => <HtmlComponent {...args} />;

export const MyHtmlPage = Template.bind({});