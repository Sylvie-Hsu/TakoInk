import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Loader
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateId, updateToken } from "../actions/UpdateActions";
import Logo from "../images/logo.png";
import $ from "jquery";

class Login extends Component {
  state = {
    phone: "",
    psw: "",
    alert: false,
    load: false,
    list: [
      "Phone format must conform to the specification.",
      "Password must be at least six characters."
    ]
  };

  vertifyFormat = () => {
    var pattern = /^1[3456789]\d{9}$/;
    return pattern.test(this.state.phone) && this.state.psw.length >= 6;
  };

  sendLoginRequest = () => {
    if (this.vertifyFormat()) {
      this.setState({
        alert: false,
        load: true
      });
      var that = this;
      var formData = new FormData();
      formData.append("userPhone", this.state.phone);
      formData.append("userPsw", this.state.psw);
      $.ajax({
        type: "POST",
        url: "/auth/signin",
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
    var load = this.state.load === false ? <div /> : <Loader />;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh", background: "#f6f6e9" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={Logo} />
            Log-in to your Tako
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
                placeholder="Password"
                type="password"
                onChange={event => {
                  this.setState({
                    psw: event.target.value
                  });
                }}
              />
              {alert}
              {load}
              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.sendLoginRequest}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us?
            <NavLink to="/signup">
              <a href="#"> Sign Up</a>
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
)(withRouter(Login));
