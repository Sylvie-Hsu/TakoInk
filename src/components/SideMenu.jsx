import React, { Component } from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import Logo from "../images/matthew.png";

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
          <Header as="h2" class="white">
            Tako
          </Header>
        </div>
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="edit" />
          Editor
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="paper plane" />
          Deploy
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="shopping cart" />
          Market
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default SideMenu;
