import React, { Component } from "react";
import { Header, Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import Logo from "../images/matthew.png";
import { NavLink, withRouter } from "react-router-dom";

class SideMenu extends Component {
  state = {};
  render() {
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <div style={{ margin: "40px 20px 80px 20px" }}>
          <Image src={Logo} circular small />
          <Header as="h2" style={{ color: "white" }}>
            Tako
          </Header>
        </div>
        <NavLink to="/home">
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/editor">
          <Menu.Item as="a">
            <Icon name="edit" />
            Editor
          </Menu.Item>
        </NavLink>
        <NavLink to="/validate">
          <Menu.Item as="a">
            <Icon name="bug" />
            Validate
          </Menu.Item>
        </NavLink>
        <NavLink to="/deploy">
          <Menu.Item as="a">
            <Icon name="paper plane" />
            Deploy
          </Menu.Item>
        </NavLink>
        <NavLink to="/market">
          <Menu.Item as="a">
            <Icon name="shopping cart" />
            Market
          </Menu.Item>
        </NavLink>
      </Sidebar>
    );
  }
}

export default withRouter(SideMenu);
