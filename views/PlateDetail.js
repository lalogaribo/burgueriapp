import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Text,
  H1,
  Card,
  CardItem,
} from 'native-base';
import OrdersContext from '../context/orders/ordersContext';
import globals from '../styles/global';

const PlateDetail = () => {
  const {plate} = useContext(OrdersContext);
  const {name, image, description, price} = plate;
  const navigation = useNavigation();
  return (
    <Container style={globals.container}>
      <Content style={globals.content}>
        <H1 style={globals.title}>{name}</H1>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('OrderForm')}>
          <Card>
            <CardItem>
              <Body>
                <Image source={{uri: image}} style={styles.image} />
                <Text>{description}</Text>
                <Text style={globals.quantity}>Precio: $ {price}</Text>
              </Body>
            </CardItem>
          </Card>
        </TouchableWithoutFeedback>
      </Content>
      <Footer>
        <FooterTab>
          <Button
            style={globals.button}
            onPress={() => navigation.navigate('OrderForm')}>
            <Text style={globals.textButton}>Ordenar</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default PlateDetail;

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: '100%',
  },
});
