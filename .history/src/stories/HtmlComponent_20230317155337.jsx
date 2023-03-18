import React from 'react';
import '../../public/myHtmlPage.html';

const HtmlComponent = () => {
  return (
    <iframe
      title="My HTML Page"
      src="./myHtmlPage.html"
      style={{ width: '100%', height: '100%', border: 'none' }}
    />
  );
};

export default HtmlComponent;