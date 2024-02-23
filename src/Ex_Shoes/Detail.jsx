import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    let { name, image } = this.props.shoes;
    return (
      <div className="col-5">
        <img className="container mt-5 w-75 table-bordered" src={image} alt="" />
        <h3>{name}</h3>
      </div>
    );
  }
}
