
import React, { FC } from 'react';
import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RowItem: FC<{mainChild: string | JSX.Element; secondaryChild?: string | JSX.Element}> = ({mainChild, secondaryChild}) => (
  <Flex>
    <div>
      {mainChild}
    </div>
    {
      secondaryChild &&
      <div style={{marginLeft: '1rem', color: 'grey'}}>
        {secondaryChild}
      </div>
    }
  </Flex>
);

export default RowItem;