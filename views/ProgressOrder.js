import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Text, H1, H4, Button, View} from 'native-base';
import OrdersContext from '../context/orders/ordersContext';
import firebase from '../firebase';
import globals from '../styles/global';
import Countdown from 'react-countdown';

const ProgressOrder = () => {
  const navigation = useNavigation();
  const {order, orderID} = useContext(OrdersContext);
  const [time, setTime] = useState(0);
  const [currentOrder, setCurrentOrder] = useState(false);

  useEffect(() => {
    const getOrder = () => {
      firebase.db
        .collection('orders')
        .doc(orderID)
        .onSnapshot(function (doc) {
          setTime(doc.data().time);
          setCurrentOrder(doc.data());
        });
    };
    getOrder();
    console.log(currentOrder);
  }, []);

  const renderTimer = ({minutes, seconds}) => {
    return (
      <Text style={styles.timer}>
        {minutes}:{seconds}
      </Text>
    );
  };
  return (
    <Container style={globals.container}>
      <View style={[globals.content, {marginTop: 60}]}>
        {time === 0 && (
          <>
            <Text style={{textAlign: 'center', marginVertical: '50%'}}>
              Hemos recibido tu orden
            </Text>
          </>
        )}
        {time > 0 && !currentOrder.complete && (
          <>
            <Text style={styles.orderTime}>Su orden estara lista en:</Text>
            <Text>
              <Countdown
                date={Date.now() + time * 60000}
                renderer={renderTimer}
              />
            </Text>
          </>
        )}
        {currentOrder.complete && (
          <Text style={styles.orderTime}>Su orden esta lista.</Text>
        )}
      </View>
    </Container>
  );
};

export default ProgressOrder;

const styles = StyleSheet.create({
  orderTime: {
    textAlign: 'center',
    fontSize: 20,
  },
  timer: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
