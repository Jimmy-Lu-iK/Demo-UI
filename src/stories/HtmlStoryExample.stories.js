import React from 'react';
import HtmlStoryExample from './HtmlStoryExample';

export default {
  title: 'HTML/Example',
  component: HtmlStoryExample,
};

const Template = (args) => <HtmlStoryExample {...args} />;

export const MyHtmlPage = Template.bind({});