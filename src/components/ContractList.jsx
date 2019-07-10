import React, { Component } from "react";
import { Card, Item } from "semantic-ui-react";
import $ from "jquery";
import { connect } from "react-redux";
import Eth from "../images/eth.png";

class ContractList extends Component {
  state = {
    contracts: []
  };
  componentDidMount() {
    var that = this;
    var formData = new FormData();
    formData.append("userId", this.props.id);
    $.ajax({
      type: "POST",
      url: "http://47.98.250.14:8080/fnc/getusercontract",
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
                <Item.Description style={{ margin: "10px 0 10px 0" }}>
                  {con.Description}
                </Item.Description>
                <Item.Description style={{ margin: "10px 0 0 0" }}>
                  {con.Content}
                </Item.Description>
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
              My Published Contracts
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

export default connect(mapStateToProps)(ContractList);
