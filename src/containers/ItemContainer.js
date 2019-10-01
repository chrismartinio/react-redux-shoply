import { connect } from 'react-redux';
import {
  add,
  remove
} from '../actions';
import ItemList from '../components/ItemList';


function mapStateToProps(state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch(add()),
    remove: () => dispatch(remove())
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)


export default connected(ItemList);