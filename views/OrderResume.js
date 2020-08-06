import React, {useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Alert} from 'react-native';
import firebase from '../firebase';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  H1,
  Footer,
  FooterTab,
  Text,
  Button,
} from 'native-base';

import OrdersContext from '../context/orders/ordersContext';
import globals from '../styles/global';

const OrderResume = () => {
  const {
    order,
    total,
    showOrderResume,
    removePlateFromOrder,
    saveOrderId,
  } = useContext(OrdersContext);
  const navigation = useNavigation();
  useEffect(() => {
    calculateTotal();
  }, [order]);

  const calculateTotal = () => {
    let newTotal = 0;
    newTotal = order.reduce((newTot, plate) => newTot + plate.total, 0);
    showOrderResume(newTotal);
  };

  const confirmItemsInOrder = () => {
    Alert.alert(
      'Favor de revisar tu pedido',
      'Una vez realizado el pedido, no se puede cancelar',
      [
        {
          text: 'Confirmar',
          onPress: async () => {
            const orderObj = {
              time: 0,
              total: Number(total),
              complete: false,
              order,
              created_on: Date.now().toLocaleString(),
            };
            try {
              const ordr = await firebase.db.collection('orders').add(orderObj);
              saveOrderId(ordr.id);
              navigation.replace('OrderProgress');
            } catch (error) {
              console.log(error);
            }
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
  };

  const confirmRemove = (plate) => {
    Alert.alert(`Eliminar ${plate.name}?`, 'Se eliminara de la orden', [
      {
        text: 'Confirmar',
        onPress: () => {
          removePlateFromOrder(plate.id);
          if (order.length === 0) navigation.navigate('Menu');
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  };
  return (
    <Container style={globals.container}>
      <Content style={globals.content}>
        <H1 style={globals.title}></H1>
        {order.map((plate, idx) => {
          const {name, price, quantity, image, id} = plate;
          return (
            <List key={id + idx}>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail large source={{uri: image}} />
                </Left>
                <Body>
                  <Text>{name}</Text>
                  <Text>Cantidad: {quantity}</Text>
                  <Text>Precio: ${price}</Text>
                  <Button
                    full
                    danger
                    style={{height: 40}}
                    onPress={() => confirmRemove(plate)}>
                    <Text>Remover</Text>
                  </Button>
                </Body>
              </ListItem>
            </List>
          );
        })}

        <Text style={styles.total}> Total: ${total} </Text>
        <Button
          onPress={() => navigation.navigate('Menu')}
          style={styles.keepOrderBtn}>
          <Text style={styles.textBtn}>Seguir ordenando</Text>
        </Button>
      </Content>
      <Footer>
        <FooterTab>
          <Button
            onPress={() => confirmItemsInOrder()}
            style={globals.button}
            iconLeft>
            <Text style={globals.textButton}>Ordenar</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
const styles = StyleSheet.create({
  total: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  keepOrderBtn: {
    alignSelf: 'center',
    width: '90%',
    textAlign: 'center',
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#909ef5',
  },
  textBtn: {
    textAlign: 'right',
    textTransform: 'uppercase',
  },
});
export default OrderResume;
