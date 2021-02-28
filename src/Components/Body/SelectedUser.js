import React, { Component } from "react";
import PostForm from "./PostForm";
import UserPost from "./UserPost";

class SelectedUser extends Component {
  render() {
    const posts = this.props.postByUser.map((post, index) => {
      return <UserPost post={post} key={index} />;
    });
    if (this.props === null) return <div></div>;
    return (
      <div style={{ textAlign: "center" }}>
        <h4>{this.props.selected.name}</h4>
        <h5>Phone: {this.props.selected.phone}</h5>
        <p>Email: {this.props.selected.email}</p>
        <p>Website: {this.props.selected.website}</p>
        <h3>Address:</h3>
        <p>City: {this.props.selected.address.city}</p>
        <p>Street: {this.props.selected.address.street}</p>
        <p>Suite: {this.props.selected.address.suite}</p>
        <h3>Currently Working:</h3>
        <h5>Company Name: {this.props.selected.company.name}</h5>
        <hr />
        <h4>{this.props.selected.name} Posts</h4>
        {posts}
        <PostForm
          userId={this.props.selected.id}
          addPost={this.props.addPost}
        />
      </div>
    );
  }
}

export default SelectedUser;
