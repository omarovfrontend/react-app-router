import React from 'react';
import { Link } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, 
         DropdownToggle, Nav, Navbar, NavbarBrand, 
         NavbarText, NavbarToggler, NavItem, NavLink, 
         UncontrolledDropdown 
} from 'reactstrap';
import { useShockContent } from '../Context';

const MyNav = () => {
  const { shock, shockHandler } = useShockContent();

  return (
    <Navbar
      color="light"
      expand="md"
      light
    >
      <Link to="/">
        <NavbarBrand>
          Home
        </NavbarBrand>
      </Link>
      <NavbarToggler />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <Link to="/post/1">
              <NavLink>
                Post
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/shock">
              <NavLink>
                ShockContent
              </NavLink>
            </Link>
          </NavItem>
          <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              caret
              nav
            >
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText onClick={shockHandler}>
          {shock ? 'Можно!' : 'Не можно!'}
        </NavbarText>
      </Collapse>
    </Navbar>
  )
}

export default MyNav;
