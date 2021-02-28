import React, { Component } from "react";
import { Card, CardBody, CardFooter, CardText, Button } from "reactstrap";

class LoadUser extends Component {
  render() {
    return (
      <div className={"user user" + this.props.passUser.id}>
        <Card>
          <CardBody>
            <h4>{this.props.passUser.name}</h4>
            <CardText>Email: {this.props.passUser.email}</CardText>
            <CardText>
              <i>{this.props.passUser.website}</i>
            </CardText>
          </CardBody>
          <CardFooter>
            <Button onClick={this.props.userInfo}>
              See Full Info and Post
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default LoadUser;
