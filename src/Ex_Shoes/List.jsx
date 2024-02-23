import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  renderListShoes = () => {
    return this.props.shoesArr.map((item) => {
      return (
        <Item
          handleClickAdd={this.props.handleAddToCart}
          handleClickView={this.props.handleViewDetail}
          key={item.id}
          data={item}
        />
      );
    });
  };
  render() {
    return <div className="row col-7">{this.renderListShoes()}</div>;
  }
}
