import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(evt) {
    evt.preventDefault()
    this.props.add(this.props.item, this.props.id)
  }

  handleRemove(evt) {
    evt.preventDefault()
    this.props.remove(this.props.id)
  }

  render() {
    return (
      <div className="card">
        <h1>{this.props.item.name}</h1>
        <p className="card">{this.props.item.description}</p>
        <p>${this.props.item.price}</p>
        <img className="card" src={this.props.item.image_url} alt=""></img>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default Item;