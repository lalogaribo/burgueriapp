import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Alert} from 'react-native';
import {
  Container,
  Content,
  Form,
  Icon,
  Button,
  Input,
  Grid,
  Col,
  Text,
  Footer,
  FooterTab,
} from 'native-base';
import OrdersContext from '../context/orders/ordersContext';
import globals from '../styles/global';

const FormOrder = () => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const {plate, addPlateToOrders} = useContext(OrdersContext);
  const {price} = plate;
  const navigation = useNavigation();

  const calculateTotals = () => {
    const total = price * quantity;
    setTotal(total);
  };
  const handleDecrement = () => {
    if (quantity === 0) return;
    const newQuantity = parseInt(quantity);
    setQuantity(newQuantity - 1);
  };

  const handleIncrement = () => {
    const newQuantity = parseInt(quantity);
    setQuantity(newQuantity + 1);
  };

  const orderConfirmation = () => {
    Alert.alert(
      'Confirmar pedido?',
      'Una vez confirmado no se puede modificar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            const pedido = {
              ...plate,
              quantity,
              total,
            };
            addPlateToOrders(pedido);
            navigation.navigate('OrderResume');
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
  };

  useEffect(() => {
    calculateTotals();
  }, [quantity]);

  return (
    <Container style={globals.container}>
      <Content style={[globals.content]}>
        <Form style={{marginTop: 100}}>
          <Text style={globals.title}>Cantidad</Text>
          <Grid>
            <Col>
              <Button
                disabled={quantity === 0 ? true : false}
                onPress={() => handleDecrement()}
                props
                style={{height: 100, width: 100, justifyContent: 'center'}}>
                <Icon name="remove" />
              </Button>
            </Col>
            <Col>
              <Input
                value={quantity.toString()}
                style={{
                  fontSize: 80,
                  textAlign: 'center',
                }}
                onChangeText={(quantity) => setQuantity(quantity)}
                keyboardType="numeric"
              />
            </Col>
            <Col>
              <Button
                onPress={() => handleIncrement()}
                props
                style={{height: 100, width: 100, justifyContent: 'center'}}>
                <Icon name="add" onPress={() => handleIncrement()} />
              </Button>
            </Col>
          </Grid>
          <Text style={styles.price}>Subtotal: $ {total}</Text>
        </Form>
      </Content>
      <Footer>
        <FooterTab>
          <Button style={globals.button} onPress={() => orderConfirmation()}>
            <Text style={globals.textButton}>Agregar a la orden</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default FormOrder;

const styles = StyleSheet.create({
  price: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
});
