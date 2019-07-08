import React from "react";
import PropTypes from "prop-types";
import QueueAnim from "rc-queue-anim";
import { Button, Grid } from "semantic-ui-react";
import BannerImage from "./BannerImage";

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: "home-banner"
  };
  render() {
    const { className } = this.props;
    var Height = document.body.clientHeight - 10;
    var Width = document.body.clientWidth;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <Grid>
            <Grid.Row
              style={{
                height: Height,
                width: Width,
                display: "flex"
              }}
            >
              <Grid.Column width={8}>
                <div
                  style={{
                    height: Height,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <QueueAnim
                    className={`${className}-content-wrapper`}
                    delay={300}
                    ease="easeOutQuart"
                  >
                    <div style={{ margin: "50px 0 50px 0" }}>
                      <h1 key="h2">智能合约在线服务平台</h1>
                      <p key="p">Smart contract online service platform.</p>
                    </div>

                    <span key="button">
                      <Button
                        primary
                        onClick={() => {
                          window.location.href = "/home";
                        }}
                      >
                        开始使用
                      </Button>
                    </span>
                  </QueueAnim>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div
                  style={{
                    height: Height,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <div className={`${className}-image-wrapper`}>
                    <BannerImage />
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Banner;
