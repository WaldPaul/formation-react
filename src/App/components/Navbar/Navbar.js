import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import { Navbar as NavBar, Container, Nav, NavLink, NavbarBrand } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import {LinkContainer} from 'react-router-bootstrap'

const Navbar = () => (
  <NavBar bg="primary" variant="dark">
    <Container>
      <NavBar.Brand>Home</NavBar.Brand>
      <Nav className="me-auto">
        <LinkContainer to="/">
          <NavLink>Accueil</NavLink>
        </LinkContainer>
        <LinkContainer to="/thumbnail">
          <NavLink>thumbnail</NavLink>
        </LinkContainer>
        <LinkContainer to="/edit">
          <NavLink>edit</NavLink>
        </LinkContainer>
      </Nav>
    </Container>
  </NavBar>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
