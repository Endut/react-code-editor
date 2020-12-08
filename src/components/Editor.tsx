import React, { FC, useState } from 'react';

import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";


const Editor: FC<{
  content: string,
  onChange: (content: string) => void,
  withFooter?: boolean,
}> = React.memo(({
  onChange,
  content,
  withFooter,
}) => {
  return (
    <AceEditor
      mode="python"
      theme="github"
      style={{
        width: '100%',
        height: withFooter ? `calc(100vh - 8rem)` : '100vh',
        borderRadius: '0.5rem',
      }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
      value={content}
      onChange={(val, e) => onChange(val)}    
    />
  );
});

export default Editor