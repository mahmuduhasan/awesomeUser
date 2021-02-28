import React, { Component } from "react";
import { Card, CardBody, CardText } from "reactstrap";

class UserPost extends Component {
  render() {
    return (
      <div>
        <br />
        <Card>
          <CardBody>
            <h3>Post Title: {this.props.post.title}</h3>
            <CardText>Post: {this.props.post.body}</CardText>
          </CardBody>
        </Card>
        <br />
      </div>
    );
  }
}

export default UserPost;
