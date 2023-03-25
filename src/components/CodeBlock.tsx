import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeBlock: React.FC<any> = ({ language, value }) => (
  <SyntaxHighlighter
    language={language}
    style={Object.assign(coy, {
      'pre[class*="language-"]': {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
      },
    })}
  >
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;
