import React, {useReducer} from 'react';
import firebase from '../../firebase';
import {PLATES_TYPES} from '../../types';
import _ from 'lodash';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

const FirebaseState = (props) => {
  const INITIAL_STATE = {
    menu: [],
  };

  // useReducer
  const [state, dispatch] = useReducer(FirebaseReducer, INITIAL_STATE);

  const getPlates = () => {
    firebase.db
      .collection('Platillos')
      .where('inStock', '==', true)
      .onSnapshot(handleSnapshot);

    function handleSnapshot(snapshot) {
      let plates = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      plates = _.sortBy(plates, 'category');
      dispatch({
        type: PLATES_TYPES.GET_PLATES,
        payload: plates,
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
        getPlates,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
