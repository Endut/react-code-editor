import React, { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { Document } from '../documents/types';
import { useDocumentsContext } from '../documents/hooks';
import { render } from 'react-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import qs from 'qs';


interface DZFile extends File { path: string };
const getFileContent = (file: File) => {
  return new Promise<string | null>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve(e.target?.result as string);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsText(file);
  });
};

const stripLeadingSlash = (path: string) => path.replace(/^\/+/, '');

const DropzoneWrapper = styled.div`
  height: 100vh;
`

const Dropzone: FC<{
  render?: (openDialog: any) => any
  redirectOnDrop?: boolean;
}> = ({ children, render, redirectOnDrop }) => {
  const history = useHistory();
  
  const { addDocuments } = useDocumentsContext();
  
  const onDropAccepted = useCallback(async (acceptedFiles: File[]) => {
    const files = await Promise.all(acceptedFiles.map(async file => {
      const content = await getFileContent(file) || "";
      return { path: stripLeadingSlash((file as DZFile).path), content }
    }));
    
    addDocuments(files);

    const [ firstDoc ] = files;
    if (redirectOnDrop) {
      history.push(`/documents/edit?${qs.stringify({path: firstDoc.path})}`);
    }
  
  }, [history]);
  
  const { getRootProps, getInputProps, open } = useDropzone({
    onDropAccepted,
    multiple: true,
    noClick: true,
  });

  return (
    <DropzoneWrapper {...getRootProps()}>
      {render ? render((e: MouseEvent) => {
        open();
        e.stopPropagation();
      }) : children}
      <input {...getInputProps()}/>
    </DropzoneWrapper>
  );
}

export default Dropzone;