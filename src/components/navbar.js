import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import PropTypes from "prop-types";
  
export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="fixed-top" color="light" light expand="md">
          <NavbarBrand className="p-0" href="/">{this.props.title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mt-3 p-0" navbar>
              <NavItem>
                <NavLink href="/about">About Me </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
               <NavItem>
                <NavLink href="https://drive.google.com/file/d/1L2XaP89p_Rab2rH69u1u6ShQjCTdN6-X/view?usp=sharing">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact">Contact me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

MyNavbar.propTypes = {
    title: PropTypes.string
}