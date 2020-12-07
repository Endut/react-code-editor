import React, { FC, useContext } from 'react';
import { useDocumentsContext } from '../documents/hooks';


const DocumentLandingPage: FC<{}> = () => {
  const { getPaths } = useDocumentsContext();
  return <></>
}
export default DocumentLandingPage;