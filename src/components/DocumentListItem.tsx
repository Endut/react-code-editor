import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import RowItem from './RowItem';

const GreyButton = styled(Button)`
  color: grey;
`

const DocumentListItem: FC<{ path: string, onClick: () => void, onRemove: () => void }> = ({path, onClick, onRemove}) => (
  <RowItem
    mainChild={
      <Button
        variant="link"
        onClick={onClick}
      >
        {path}
      </Button>
    }
    secondaryChild={
      <GreyButton
        variant="link"
        onClick={onRemove}
      >
        remove
      </GreyButton>
    }
  />
);

export default DocumentListItem;