import React, { useEffect } from 'react';

const HtmlComponent = () => {
  const htmlContent = `
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

  useEffect(() => {
    const iframe = document.getElementById('html-iframe');
    if (iframe) {
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(htmlContent);
      iframe.contentWindow.document.close();
    }
  }, []);

  return <iframe id="html-iframe" style={{ width: '100%', height: '100%', border: 'none' }} />;
};

export default HtmlComponent;