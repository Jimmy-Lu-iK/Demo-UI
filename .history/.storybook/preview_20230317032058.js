import 'prismjs/themes/prism-tomorrow.css'; // 加载 Prism 的样式文件
import 'prismjs/components/prism-javascript.js'; // 加载 JavaScript 语法高亮插件
import 'prismjs/components/prism-css.js'; // 加载 CSS 语法高亮插件
import { addDecorator } from '@storybook/html';

// 注册 Prism 语法高亮插件
addDecorator((storyFn, context) => {
  const story = storyFn();
  const codeBlocks = story.match(/<pre>.*?<code class="language-(.*?)">([\s\S]*?)<\/code><\/pre>/g);

  if (codeBlocks) {
    codeBlocks.forEach((block) => {
      const [, language, code] = block.match(/<code class="language-(.*?)">([\s\S]*?)<\/code>/);
      const highlightedCode = Prism.highlight(code, Prism.languages[language], language);
      const highlightedBlock = block.replace(code, highlightedCode);
      story.replace(block, highlightedBlock);
    });
  }

  return story;
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}