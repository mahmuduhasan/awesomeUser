import React, { Component } from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  NavbarBrand,
} from "reactstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {
    isNavOpen: false,
  };

  navOpenHandler = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    const style = {
      textDecoration: "none",
    };
    return (
      <div className="container navigation">
        <Navbar expand="sm">
          <NavbarBrand style={{ color: "black" }} href="/home">
            AwesomeUser
          </NavbarBrand>
          <NavbarToggler onClick={this.navOpenHandler} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link style={style} className="link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link style={style} className="link" to="/user">
                  User
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
