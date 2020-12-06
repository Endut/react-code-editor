import React, { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { getFileContent } from '../utils';
import { Document } from '../types';

interface DZFile extends File { path: string };

const Dropzone: FC<{
  onFileDrop: (files: Document[]) => void
}> = ({ onFileDrop, children }) => {
  const onDropAccepted = useCallback(async (acceptedFiles: File[]) => {
    const files = await Promise.all(acceptedFiles.map(async file => {
      const content = await getFileContent(file) || "";
      return { path: (file as DZFile).path, content }
    }));

    onFileDrop(files);
  }, []);
  
  const { getRootProps } = useDropzone({
    onDropAccepted,
    multiple: true
  });

  return (
    <div {...getRootProps()}>
      {children}
    </div>
  );
}

export default Dropzone;