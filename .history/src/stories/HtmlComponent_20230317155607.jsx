import React from 'react';

const HtmlComponent = () => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML Page</title>
    <style>
      /* 在这里添加你的样式 */
    </style>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML page.</p>
    <!-- 在这里添加你的 HTML 内容 -->
  </body>
  </html>
  `;

  const createMarkup = () => {
    return { __html: htmlContent };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export default HtmlComponent;