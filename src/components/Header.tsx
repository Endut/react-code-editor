import React, { FC } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const { Item } = NavDropdown;
const { Brand, Toggle, Collapse } = Navbar;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;

// const ProvisionalInput: FC<{
//   value?: string,
//   placeholder: string,
//   onBlur?: (value: string) => void
// }> = ({value, placeholder, onBlur}) => {
//   if (value) {
//     return (<>{value}</>)
//   }
  
//   return (
//     // <form>
//     //   <div className="form-row">
//     //     <Input type="text" placeholder={placeholder} onBlur={(e: any) => onBlur && onBlur(e.target.value)}/>
//     //   </div>
//     // </form>
//   )
// } 

const Title: FC<{}> = ({ children }) => {
  return (
    <Brand>
      {children}
    </Brand>
  )
};

export const Header: FC<{
  title?: string;
  onSave: () => void;
  onNew: () => void;
}> = ({
  title,
  onSave,
  onNew
}) => {
  const history = useHistory();
  return (
    <Navbar expand="lg">
      <Title>{title}</Title>
      <Toggle aria-controls="header-nav" />
      <Collapse id="header-nav">
        <Nav>
          <NavDropdown title="File" id="header-dropdown">
            <Item onClick={() => history.push('/documents/new')}>New file</Item>
            <Item onClick={() => history.push('/documents')}>
              Open
            </Item>
            <Item onClick={onSave}>Save</Item>
          </NavDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export const NewDocumentHeader: FC<{ onSaveTitle: (title: string) => void }> = ({ onSaveTitle }) => {

  return (
    <Navbar expand="lg">
      <Input onBlur={(e: any) => onSaveTitle(e.target.value)} placeholder='project title'/> - <Input />
      <Toggle aria-controls="header-nav" />
      <Collapse id="header-nav">
      </Collapse>
    </Navbar>
  )
};
