import React, { FC } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import RowItem from './RowItem';

import TitleInput from './TitleInput';

const { Item } = NavDropdown;
const { Toggle, Collapse } = Navbar;

export const Header: FC<{
  title?: string;
  onSave: () => void;
  onTitleUpdate: (title: string) => void;
}> = ({
  title,
  onSave,
  onTitleUpdate
}) => {
  const history = useHistory();
  
  return (
    <Navbar expand="lg">
      <TitleInput title={title} onUpdate={onTitleUpdate}/>
      <Toggle aria-controls="header-nav" />
      <Collapse id="header-nav">
        <Nav>
          <NavDropdown title="File" id="header-dropdown">
            <Item onClick={() => history.push('/documents/new')}>
              <RowItem mainChild="New file" secondaryChild="(ctrl-n)" />
              </Item>
            <Item onClick={() => history.push('/documents')}>
              <RowItem mainChild="Open" secondaryChild="(ctrl-o)" />
            </Item>
            <Item onClick={onSave}>
              <RowItem mainChild="Save" secondaryChild="(ctrl-s)" />
              </Item>
          </NavDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
};
