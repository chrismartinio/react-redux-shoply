import { ADD, REMOVE } from './actionTypes';
import data from './data.json';

const INITIAL_STATE = {
  inventory: [data.products],
  items: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return { ...state, items: [...state.items, { ...action.payload, id: action.id }] };

    case REMOVE:
      let index = state.items.findIndex(item => item.id === action.id)
      let copy = [...state.items]
      if (index >= 0) { copy.splice(index, 1) }
      return { ...state, items: copy };

    default:
      return state;
  }
}

export default rootReducer;