import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectFood } from "../actions/index";

export class foodList extends Component {
  createListItems() {
    return this.props.foods.foods.map(food => {
      return (
        <li key={food.id} onClick={() => this.props.selectFood(food)}>
          {food.name}: {food.description}
        </li>
      );
    });
  }

  render() {
    return <ul>{this.createListItems()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectFood: selectFood }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(foodList);
