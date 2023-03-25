import React from 'react';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeBlock: React.FC<CodeProps> = ({ language, value }: any) => (
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
    이 부분은 코드 입니다.
  </SyntaxHighlighter>
);

export default CodeBlock;
