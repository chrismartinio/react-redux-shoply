import React from 'react';
import Item from './Item';
import data from '../data.json';

class ItemList extends React.Component {


  componentDidMount() {
    console.log(data.products);
  }

  render() {

    return (
      <div>
        Item list Component
        {Object.keys(data.products).map(item => (
          <Item item={item} key={item} add={this.props.add} />))}
      </div>
    )
  }
}

export default ItemList;