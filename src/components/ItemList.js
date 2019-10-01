import React from 'react';
import Item from './Item';

class ItemList extends React.Component {

  render() {

    let items = Object.entries(this.props.inventory[0]).map(item => (
      <Item item={item[1]} id={item[0]} key={item[0]} add={this.props.add} remove={this.props.remove} />
    ))

    return (
      <div>
        <h1>Items</h1>
        <h3>Cart: {this.props.items.length}</h3>
        {items}
      </div>
    )
  }
}

export default ItemList;