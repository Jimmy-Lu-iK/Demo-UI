import React from 'react';
import HtmlComponentComplex from './HtmlComponentComplex';

export default {
  title: 'HTML/Example',
  component: HtmlComponentComplex,
};

const Template = (args) => <HtmlComponentComplex {...args} />;

export const MyHtmlPage = Template.bind({});