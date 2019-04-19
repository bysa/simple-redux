import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUser } from "../actions/index";

export class addUser extends Component {
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  state = {
    id: "",
    first: "",
    last: "",
    age: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onAddNewUser = e => {
    e.preventDefault();
    const user = this.state;

    this.props.addNewUser(user);
    this.setState({
      first: "",
      last: "",
      age: ""
    });
  };
  render() {
    const { id, first, last, age } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add User</h2>
        <form onSubmit={this.onAddNewUser}>
          <div className="form-group">
            <label>First</label>
            <input
              className="form-control"
              type="text"
              name="first"
              onChange={this.onChange}
              value={first}
            />
          </div>
          <div className="form-group">
            <label>Last</label>
            <input
              className="form-control"
              type="text"
              name="last"
              onChange={this.onChange}
              value={last}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <textarea
              className="form-control"
              type="text"
              name="age"
              onChange={this.onChange}
              value={age}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  { addNewUser }
)(addUser);
