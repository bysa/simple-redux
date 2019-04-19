import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewFood } from "../actions/index";

export class addFood extends Component {
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  state = {
    id: "",
    name: "",
    ingredients: "",
    description: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onAddNewFood = e => {
    e.preventDefault();
    const food = this.state;

    this.props.addNewFood(food);
    this.setState({
      id: "",
      name: "",
      ingredients: "",
      description: ""
    });
  };
  render() {
    const { id, name, ingredients, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Food</h2>
        <form onSubmit={this.onAddNewFood}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Ingredients</label>
            <input
              className="form-control"
              type="text"
              name="ingredients"
              onChange={this.onChange}
              value={ingredients}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
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
    foods: state.foods
  };
}

export default connect(
  mapStateToProps,
  { addNewFood }
)(addFood);
