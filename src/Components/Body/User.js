import React, { Component } from "react";
import { connect } from "react-redux";
import LoadUser from "./LoadUser";
import SelectedUser from "./SelectedUser";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { addPost, fetchUser } from "../../Redux/ActionCreator";
import Loader from "./Loader";

const mapStateToProps = (state) => {
  return {
    dataUser: state.userData,
    dataPost: state.postData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (userId, title, post) => dispatch(addPost(userId, title, post)),
    fetchUser: () => dispatch(fetchUser()),
  };
};

class User extends Component {
  state = {
    selectedUser: null,
    isModalOpen: false,
    userPost: null,
  };
  showUserInfo = (user) => {
    this.setState({
      selectedUser: user,
      isModalOpen: !this.state.isModalOpen,
    });
  };

  modalHandler = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    if (this.props.dataUser.isLoaded) {
      return <Loader />;
    } else {
      const loadUser = this.props.dataUser.userData.map((user, index) => {
        return (
          <LoadUser
            passUser={user}
            key={index}
            userInfo={() => this.showUserInfo(user)}
          />
        );
      });
      let userSelect = null;
      if (this.state.selectedUser != null) {
        const posts = this.props.dataPost.filter((post) => {
          return post.userId === this.state.selectedUser.id;
        });
        userSelect = (
          <SelectedUser
            selected={this.state.selectedUser}
            postByUser={posts}
            addPost={this.props.addPost}
          />
        );
      }
      return (
        <div className="container userContainer">
          {loadUser}
          <Modal isOpen={this.state.isModalOpen}>
            <ModalBody>{userSelect}</ModalBody>
            <ModalFooter>
              <Button onClick={this.modalHandler}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
