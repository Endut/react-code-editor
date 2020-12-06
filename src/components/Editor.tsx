import React, { FC } from 'react';

import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";


import { Document, Documents } from '../types';

const Editor: FC<{
  document?: Document,
  setDocument: (doc: Document) => void,
  onSave: () => void
}> = ({
  document, setDocument, onSave
}) => {

  const { path, content } = document || { path: 'untitled', content: '' };

  return (
    <AceEditor
      mode="python"
      theme="github"
      onChange={doc => document && setDocument({ path, content: doc })}
      style={{
        width: '100%',
        height: 'calc(100vh - 8rem)',
        borderRadius: '0.5rem',
      }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
      value={document?.content || ''}
      commands={[{
        name: 'save',
        bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
        exec: editor => {
          const doc = editor.getValue();
          document && setDocument({ path: document.path, content: doc });
          onSave()
        }
      }]}     
    />
  );
};

export default Editor