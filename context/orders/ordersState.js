import React, {useReducer} from 'react';

import OrdersReducer from './ordersReducer';
import OrdersContext from './ordersContext';
import {PLATES_TYPES} from '../../types';

const OrdersState = (props) => {
  const INITIAL_STATE = {
    order: [],
    plate: null,
    total: 0,
    orderID: '',
  };

  // useReducer
  const [state, dispatch] = useReducer(OrdersReducer, INITIAL_STATE);

  const selectPlate = (plate) => {
    dispatch({
      type: PLATES_TYPES.SELECT_PLATE,
      payload: plate,
    });
  };

  const addPlateToOrders = (plate) => {
    dispatch({
      type: PLATES_TYPES.ADD_PLATE_TO_ORDERS,
      payload: plate,
    });
  };

  const showOrderResume = (total) => {
    dispatch({
      type: PLATES_TYPES.SHOW_ORDER_RESUME,
      payload: total,
    });
  };

  const removePlateFromOrder = (id) => {
    dispatch({
      type: PLATES_TYPES.REMOVE_PLATE_FROM_ORDER,
      payload: id,
    });
  };

  const saveOrderId = (id) => {
    dispatch({
      type: PLATES_TYPES.SAVE_ORDER_ID,
      payload: id,
    });
  };
  return (
    <OrdersContext.Provider
      value={{
        order: state.order,
        plate: state.plate,
        total: state.total,
        orderID: state.orderID,
        selectPlate,
        addPlateToOrders,
        showOrderResume,
        removePlateFromOrder,
        saveOrderId,
      }}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
