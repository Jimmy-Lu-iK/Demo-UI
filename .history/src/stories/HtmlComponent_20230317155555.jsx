import React from 'react';

const HtmlComponent = () => {
  const htmlContent = `
    <h1>Hello, World!</h1>
    <p>This is a simple HTML page.</p>
    <!-- 在这里添加你的 HTML 内容 -->
  `;

  const createMarkup = () => {
    return { __html: htmlContent };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export default HtmlComponent;