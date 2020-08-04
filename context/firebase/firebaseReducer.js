import {PLATES_TYPES} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case PLATES_TYPES.GET_PLATES:
      return {...state, menu: action.payload};
    default:
      return state;
  }
};
