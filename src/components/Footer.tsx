import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { callApi } from '../callApi';
import { useDocumentsContext } from '../documents/hooks';
import { Flex } from './RowItem';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const ApiResponseInfo: FC<{ response?: { modelInfo: string } }> = ({response}) => {
  if (!response) {
    return null;
  };

  return (
    <div> 
      { response.modelInfo }
    </div>
  )
};


const Footer: FC<{}> = () => {
  const { documents } = useDocumentsContext();
  const [ submitting, setSubmitting ] = useState(false);
  const [ response, setResponse ] = useState()

  return (<FooterContainer>
    <Flex>
      <Button
        onClick={async () => {
          setSubmitting(true);
          const response = await callApi(`${process.env.API_URL}/documents`, documents, 'PUT');
          setResponse(response);
          setSubmitting(false);
        }}
        disabled={Object.keys(documents).length === 0}
      >submit project</Button>
      <ApiResponseInfo response={response}/>
    </Flex>
  </FooterContainer>
  )
};

export default Footer;