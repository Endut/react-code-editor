import React, { FC } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

// const HiddenInput = styled.input`
//   display: none;
// `

const { Item } = NavDropdown;
const { Brand, Toggle, Collapse } = Navbar;

const Header: FC<{
  projectName: string;
  title: string;
  onSave: () => void;
  onNew: () => void;
}> = ({
  projectName,
  title,
  onSave,
  onNew
}) => (
  <Navbar expand="lg">
    <Brand>{projectName} - {title}</Brand>
    <Toggle aria-controls="header-nav" />
    <Collapse id="header-nav">
      <Nav>
        <NavDropdown title="File" id="header-dropdown">
          <Item onClick={onNew}>New file</Item>
          <Item onClick={() => console.log('open')}>
            Open
          </Item>
          <Item onClick={onSave}>Save</Item>
        </NavDropdown>
      </Nav>
    </Collapse>
  </Navbar>
);

export default Header;