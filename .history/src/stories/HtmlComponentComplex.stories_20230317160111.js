import React from 'react';
import HtmlComponentComplex from './HtmlComponentComplex';

export default {
  title: 'My HTML Page',
  component: HtmlComponentComplex,
};

const Template = (args) => <HtmlComponentComplex {...args} />;

export const MyHtmlPage = Template.bind({});