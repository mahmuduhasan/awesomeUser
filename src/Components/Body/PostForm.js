import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      post: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleInputSubmit = (event) => {
    this.props.addPost(this.props.userId, this.state.title, this.state.post);
    this.setState({
      title: "",
      post: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <br />
        <Form onSubmit={this.handleInputSubmit}>
          <Input
            type="text"
            placeholder="Enter Title"
            value={this.state.title}
            name="title"
            required
            onChange={this.handleInputChange}
          />
          <br />
          <Input
            type="text"
            placeholder="Enter Post"
            value={this.state.post}
            name="post"
            required
            onChange={this.handleInputChange}
          />
          <br />
          <Button>Create Post</Button>
        </Form>
      </div>
    );
  }
}

export default PostForm;
