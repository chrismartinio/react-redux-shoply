import { ADD, REMOVE } from './actionTypes';
import uuid from 'uuid/v4';

const INITIAL_STATE = { items: [] };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
    case ADD:
      return { ...state, items: [state.items, { ...action.payload, id: uuid() }]};

    case REMOVE:
      return { ...state, items: state.todos.filer(item => item.id !== action.id) };

    default:
      return state;
  }
}

export default rootReducer;