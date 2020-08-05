import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View, Icon} from 'native-base';
import globals from '../styles/global';

import OrdersContext from '../context/orders/ordersContext';

const ButtonResume = () => {
  const {order} = useContext(OrdersContext);
  const navigation = useNavigation();

  return (
    <View>
      {order.length > 0 && (
        <Button
          iconLeft
          style={{backgroundColor: '#909ef5'}}
          onPress={() => navigation.navigate('OrderResume')}>
          <Icon name="fast-food" />
          <Text style={globals.textButton}>{order.length}</Text>
        </Button>
      )}
    </View>
  );
};

export default ButtonResume;
