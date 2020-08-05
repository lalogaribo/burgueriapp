import {PLATES_TYPES} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case PLATES_TYPES.SELECT_PLATE:
      return {...state, plate: action.payload};
    case PLATES_TYPES.ADD_PLATE_TO_ORDERS:
      return {...state, order: [...state.order, action.payload]};
    case PLATES_TYPES.SHOW_ORDER_RESUME:
      return {...state, total: action.payload};
    case PLATES_TYPES.REMOVE_PLATE_FROM_ORDER:
      return {
        ...state,
        order: state.order.filter((plate) => plate.id !== action.payload),
      };
    case PLATES_TYPES.SAVE_ORDER_ID:
      return {...state, orderID: action.payload};
    default:
      return state;
  }
};
