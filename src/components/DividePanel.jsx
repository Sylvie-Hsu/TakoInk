import React, { Component } from "react";
import { Divider, Grid, Image, Segment, Card } from "semantic-ui-react";

class DividePanel extends Component {
  state = {};
  render() {
    var cardWidth = document.body.clientWidth - 170;
    return (
      <Card style={{ width: cardWidth, display: "flex" }}>
        <Card.Content>
          <Card.Header as="h1">Validate Analysis</Card.Header>
          <Segment>
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <p>
                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </p>
                <p>
                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </p>
                <p>
                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </p>
                <p>
                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </p>
              </Grid.Column>
              <Grid.Column>
                <p>
                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </p>
                <p>
                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </p>
                <p>
                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </p>
                <p>
                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </p>
              </Grid.Column>
            </Grid>
            <Divider vertical>And</Divider>
          </Segment>
        </Card.Content>
      </Card>
    );
  }
}

export default DividePanel;
