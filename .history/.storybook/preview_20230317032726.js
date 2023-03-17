// import React from 'react';
// import { addDecorator } from '@storybook/react';
// import { withCode } from 'storybook-addon-code';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// import { CodeBlock } from '../src/components';

// // 注册 `withCode` 插件
// addDecorator(
//   withCode({
//     // `CodeBlock` 组件将会用来渲染代码块
//     CodeComponent: CodeBlock,
//     // 选择要高亮的代码语言
//     // 这里选择了 React（jsx）、JavaScript 和 CSS
//     // 你可以根据需要添加或移除语言
//     react: 'jsx',
//     javascript: 'javascript',
//     css: 'css',
//     // 渲染代码块时使用的组件
//     // 这里使用了 `SyntaxHighlighter` 组件，但也可以使用其他组件
//     // 具体可以参考 `prism-react-renderer` 文档
//     // https://github.com/FormidableLabs/prism-react-renderer
//     render: ({ language, code }) => (
//       <SyntaxHighlighter language={language} style={tomorrow}>
//         {code}
//       </SyntaxHighlighter>
//     ),
//   })
// );

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}