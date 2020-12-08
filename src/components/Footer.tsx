import React, { FC, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
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

const ApiResponseInfo: FC<{
  response?: {
    info: string,
    url: string
  }
}> = ({response}) => {
  if (!response) {
    return null;
  };

  return (
    <Alert variant="info" style={{marginBottom: '0', marginLeft: '1rem' }}> 
      { response.info }{' download your model '}<Alert.Link href={response.url}>here</Alert.Link>
    </Alert>
  )
};

const Footer: FC<{}> = () => {
  const { documents } = useDocumentsContext();
  const [ response, setResponse ] = useState()

  return (
    <FooterContainer>
      <Flex>
        <Button
          style={{padding: '.75rem 1.25rem'}}
          onClick={async () => {
            const response = await callApi(`documents`, documents, 'PUT');
            setResponse(response);
          }}
          disabled={Object.keys(documents).length === 0}
        >Upload project</Button>
        <ApiResponseInfo response={response}/>
      </Flex>
    </FooterContainer>
  )
};

export default Footer;