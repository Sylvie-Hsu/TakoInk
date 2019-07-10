import React, { Component } from "react";
import { Form, Card, Image, Grid, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import Eth from "../images/eth.png";
import $ from "jquery";

class PublishForm extends Component {
  state = {
    contractName: "",
    contractPrice: "",
    contractDesc: "",
    contractCont: "",
    uploadMethod: "",
    success: false,
    fail: false
  };

  publishBook = () => {
    console.log(this.state);
    var that = this;
    var formData = new FormData();
    formData.append("userId", this.props.id);
    formData.append("contractName", this.state.contractName);
    formData.append("contractPrice", this.state.contractPrice);
    formData.append("contractDesc", this.state.contractDesc);
    formData.append("contractCont", this.state.contractCont);
    var url =
      this.state.uploadMethod == "market"
        ? "http://47.98.250.14:8080/fnc/postmarketcontract"
        : "http://47.98.250.14:8080/fnc/postusercontract";
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      success: function(data) {
        console.log(data);
        if (data.status == "0") {
          that.setState({
            success: true
          });
        } else {
          that.setState({
            fail: true
          });
        }
      },
      contentType: false,
      processData: false,
      dataType: "json"
    });
  };

  handleChange = (e, { value }) => this.setState({ value });
  handleTradeMethodChange = (e, { value }) =>
    this.setState({ uploadMethod: value });

  render() {
    var cardWidth = document.body.clientWidth - 170;
    var success =
      this.state.success === false ? (
        <div />
      ) : (
        <Message
          success
          icon="check circle outline"
          header="Your contract publishment was successful"
          content="Get the best news in your home-tab every day."
        />
      );
    var fail =
      this.state.fail === false ? (
        <div />
      ) : (
        <Message
          error
          icon="meh outline"
          header="Your contract publishment failed"
          content="Please wait for some minutes and try again."
        />
      );
    console.log(this.props);
    return (
      <Card
        style={{
          margin: "10px 10px 0 0",
          width: cardWidth,
          display: "flex"
        }}
      >
        <Card.Content>
          <Card.Header as="h1">Publish Contract</Card.Header>
          <Card.Meta>
            <span>
              You can publish your contract for a potential buyer here.
            </span>
          </Card.Meta>
          <Form style={{ margin: "10px 0 10px 0" }}>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={5}>
                  <Image
                    src={Eth}
                    size="medium"
                    rounded
                    style={{ margin: "10px 0 10px 0" }}
                  />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Contract name"
                      placeholder="Contract name"
                      onChange={event => {
                        this.setState({
                          contractName: event.target.value
                        });
                      }}
                    />
                    <Form.Input
                      fluid
                      label="Contract Price"
                      placeholder="Contract Price"
                      onChange={event => {
                        this.setState({
                          contractPrice: event.target.value
                        });
                      }}
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <label>Upload Method</label>
                    <Form.Radio
                      label="I want to upload it to the market.   "
                      value="market"
                      checked={this.state.uploadMethod === "market"}
                      onChange={this.handleTradeMethodChange}
                    />
                    <Form.Radio
                      label="I want to upload it to my own repo."
                      value="repo"
                      checked={this.state.uploadMethod === "repo"}
                      onChange={this.handleTradeMethodChange}
                    />
                  </Form.Group>
                  <Form.TextArea
                    label="Description"
                    placeholder="Tell us more about the contract..."
                    onChange={event => {
                      this.setState({
                        contractDesc: event.target.value
                      });
                    }}
                  />
                  <Form.TextArea
                    label="Content"
                    placeholder="Here is the contract..."
                    style={{ height: "135px" }}
                    onChange={event => {
                      this.setState({
                        contractCont: event.target.value
                      });
                    }}
                  />
                  <Form.Checkbox label="I agree to the Terms and Conditions" />
                  <Form.Button onClick={this.publishBook}>Submit</Form.Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
          {success}
          {fail}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id,
    token: state.token
  };
};

export default connect(mapStateToProps)(PublishForm);
