import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {

  }

  handleRemove() {

  }

  render() {
    return (
      <div>Item</div>
    );
  }
}

export default Item;