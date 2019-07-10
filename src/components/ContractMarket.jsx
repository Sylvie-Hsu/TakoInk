import React, { Component } from "react";
import { Item, Button, Icon, Header, Modal, Card } from "semantic-ui-react";
import $ from "jquery";
import { connect } from "react-redux";
import Eth from "../images/eth.png";

class ContractMarket extends Component {
  state = {
    contracts: [],
    modalOpen: false
  };
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  componentDidMount() {
    var that = this;
    var formData = new FormData();
    formData.append("userId", this.props.id);
    $.ajax({
      type: "POST",
      url: "http://47.98.250.14:8080/fnc/getmarketcontract",
      data: formData,
      success: function(data) {
        console.log(data);
        if (data.status == "0") {
          var info = JSON.parse(data.contracts);
          console.log(info);
          that.setState({
            contracts: info
          });
        } else {
        }
      },
      contentType: false,
      processData: false,
      dataType: "json"
    });
  }

  render() {
    var cardWidth = document.body.clientWidth - 170;
    const contractList =
      this.state.contracts != null ? (
        this.state.contracts.map(con => {
          return (
            <Item key={con.ID}>
              <Item.Image src={Eth} size="small" />
              <Item.Content>
                <Item.Header as="a">{con.Name}</Item.Header>
                <Item.Meta style={{ margin: "20px 0 10px 0" }}>
                  <div style={{ margin: "0 0 20px 0" }}>
                    <span className="cinema">Price: ${con.Price}</span>
                  </div>
                </Item.Meta>
                <Item.Description style={{ margin: "10px 0 0 0" }}>
                  {con.Description}
                </Item.Description>
                <Item.Description style={{ margin: "10px 0 10px 0" }}>
                  {con.Content}
                </Item.Description>
                <Item.Extra style={{ margin: "0 0 0 0" }}>
                  <Modal
                    trigger={
                      <Button
                        basic
                        color="black"
                        floated="right"
                        onClick={this.handleOpen}
                      >
                        Buy this
                      </Button>
                    }
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size="small"
                  >
                    <Header icon="browser" content="Contract recieved" />
                    <Modal.Content>
                      <h3>
                        Congratulations! The contract has been traded
                        successfully.
                      </h3>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color="green" onClick={this.handleClose} inverted>
                        <Icon name="checkmark" /> Got it
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })
      ) : (
        <div>No contracts yet</div>
      );
    return (
      <div>
        <Card
          style={{ width: cardWidth, display: "flex", margin: "10px 0 10px 0" }}
        >
          <Card.Content>
            <Card.Header as="h1" style={{ margin: "5px 0 30px 0" }}>
              Recently Published Contracts
            </Card.Header>
            <Card.Group
              style={{ justifyContent: "center", margin: "0 0 20px 0" }}
            >
              <Item.Group divided style={{ width: cardWidth - 200 }}>
                {contractList}
              </Item.Group>
            </Card.Group>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id,
    token: state.token
  };
};

export default connect(mapStateToProps)(ContractMarket);
