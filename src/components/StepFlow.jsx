import React, { Component } from "react";
import { Icon, Step } from "semantic-ui-react";

class StepFlow extends Component {
  state = {};
  render() {
    return (
      <Step.Group>
        <Step>
          <Icon name="truck" />
          <Step.Content>
            <Step.Title>Finding</Step.Title>
            <Step.Description>Choose your finding options</Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Icon name="payment" />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
            <Step.Description>
              Confirm basic confirm information
            </Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Icon name="smile" />
          <Step.Content>
            <Step.Title>Wait Buyers</Step.Title>
            <Step.Description>
              Wait for coming constract buyers
            </Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Icon name="dollar sign" />
          <Step.Content>
            <Step.Title>Check Income</Step.Title>
            <Step.Description>Check income of transfer</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    );
  }
}

export default StepFlow;
