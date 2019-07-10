import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import Logo from "../images/logo.png";
import { NavLink, withRouter } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import { updateId, updateToken } from "../actions/UpdateActions";

class Signup extends Component {
  state = {
    phone: "",
    username: "",
    psw: "",
    pswConfirm: "",
    alert: false,
    load: false,
    list: [
      "Phone format must conform to the specification.",
      "Username can not be empty.",
      "Password must be at least six characters."
    ]
  };

  vertifyFormat = () => {
    var pattern = /^1[3456789]\d{9}$/;
    return (
      pattern.test(this.state.phone) &&
      this.state.username != "" &&
      this.state.psw === this.state.pswConfirm &&
      this.state.psw.length >= 6
    );
  };

  sendSignupRequest = () => {
    if (this.vertifyFormat()) {
      this.setState({
        alert: false,
        load: true
      });
      var that = this;
      var formData = new FormData();
      formData.append("userPhone", this.state.phone);
      formData.append("userName", this.state.username);
      formData.append("userPsw", this.state.psw);
      $.ajax({
        type: "POST",
        url: "http://47.98.250.14:8080/auth/signup",
        data: formData,
        success: function(data) {
          console.log(data);
          if (data.status == "0") {
            let userInfo = JSON.parse(data.userInfo);
            that.props.updateId(userInfo.UserId);
            that.props.history.push("/home");
          } else {
            that.setState({
              list: [
                "Wrong password, try again.",
                "User does not exist, please click sign up."
              ],
              alert: true
            });
          }
        },
        contentType: false,
        processData: false,
        dataType: "json"
      });
    } else {
      this.setState({
        alert: true
      });
    }
  };

  render() {
    var alert =
      this.state.alert === false ? (
        <div />
      ) : (
        <Message
          error
          header="Could you check something!"
          list={this.state.list}
        />
      );
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh", background: "#f6f6e9" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={Logo} />
            Welcome to Tako
          </Header>
          <Form size="large" error active>
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Phone number"
                onChange={event => {
                  this.setState({
                    phone: event.target.value
                  });
                }}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Username"
                onChange={event => {
                  this.setState({
                    username: event.target.value
                  });
                }}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={event => {
                  this.setState({
                    psw: event.target.value
                  });
                }}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Comfirm password"
                type="password"
                onChange={event => {
                  this.setState({
                    pswConfirm: event.target.value
                  });
                }}
              />
              {alert}
              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.sendSignupRequest}
              >
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already has account?
            <NavLink to="/login">
              <a href="#"> Sign In</a>
            </NavLink>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateToken: token => {
      dispatch(updateToken(token));
    },
    updateId: id => {
      dispatch(updateId(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signup));
