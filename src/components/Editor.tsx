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
  updateDocument: (doc: Document) => void,
  onSave: () => void
}> = ({
  document, updateDocument, onSave
}) => {

  const { path, content } = document  || { path: 'untitled', content: '' };

  return (
    <AceEditor
      mode="python"
      theme="github"
      onChange={doc => document && updateDocument({ path, content: doc })}
      style={{
        width: '100%',
        height: 'calc(100vh - 6rem)',
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
      commands={[{
        name: 'save',
        bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
        exec: editor => {
          const doc = editor.getValue();
          document && updateDocument({ path, content: doc });
          onSave()
        }
      }]}     
    />
  );
};

export default Editor