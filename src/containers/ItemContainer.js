import { connect } from 'react-redux';
import {
  add,
  remove
} from '../actions';
import ItemList from '../components/ItemList';


function mapStateToProps(state) {
  return {
    items: state.items,
    inventory: state.inventory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (data, id) => dispatch(add(data, id)),
    remove: (id) => dispatch(remove(id))
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)


export default connected(ItemList);