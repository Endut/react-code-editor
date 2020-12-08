import React, { FC } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  :focus {
    outline: none;
  }
`;

const TitleInput: FC<{
  title?: string;
  onUpdate: (title: string) => void;
}> = ({ title, onUpdate }) => {
  return (
    <Input
      placeholder="untitled"
      defaultValue={title}
      onChange={e => onUpdate(e.target.value)}
    />
  )
}

export default TitleInput;