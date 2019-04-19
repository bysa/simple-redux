import React, { Component } from "react";
import { connect } from "react-redux";

export class foodDetail extends Component {
  render() {
    if (!this.props.food) {
      return <h4>Select a food ...</h4>;
    }
    return (
      <div>
        <img src={this.props.food.thumbnail} />
        <h2>
          {this.props.food.name} {this.props.food.description}
        </h2>
        <h3>Calories: {this.props.food.calories}</h3>
        <h3>Ingredients: {this.props.food.ingredients}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    food: state.activeFood
  };
}

export default connect(mapStateToProps)(foodDetail);
