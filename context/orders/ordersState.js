import React, {useReducer} from 'react';

import OrdersReducer from './ordersReducer';
import OrdersContext from './ordersContext';

const OrdersState = (props) => {
  const INITIAL_STATE = {
    order: [],
  };

  // useReducer
  const [state, dispatch] = useReducer(OrdersReducer, INITIAL_STATE);

  return (
    <OrdersContext.Provider
      value={{
        order: state.order,
      }}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
