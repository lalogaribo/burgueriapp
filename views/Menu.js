import React, {useEffect, useContext, Fragment} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import OrdersContext from '../context/orders/ordersContext';
import {
  Container,
  Separator,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from 'native-base';
import globals from '../styles/global';

const Menu = () => {
  const {getPlates, menu} = useContext(FirebaseContext);
  const {selectPlate} = useContext(OrdersContext);

  const navigation = useNavigation();

  useEffect(() => {
    getPlates();
  }, []);

  const showategory = (category, index) => {
    if (index > 0) {
      const prevCategory = menu[index - 1].category;
      if (prevCategory !== category) {
        return (
          <Separator style={styles.header}>
            <Text style={styles.headerText}>{category}</Text>
          </Separator>
        );
      }
    } else {
      return (
        <Separator style={styles.header}>
          <Text style={styles.headerText}>{category}</Text>
        </Separator>
      );
    }
  };

  return (
    <Container style={globals.container}>
      <Content style={{backgroundColor: '#FFF'}}>
        <List>
          {menu.map((plate, i) => {
            const {image, name, description, category, id, price} = plate;
            return (
              <Fragment key={id}>
                {showategory(category, i)}
                <ListItem
                  onPress={() => {
                    const {inStock, ...plate2} = plate;
                    selectPlate(plate2);
                    navigation.navigate('PlateDetail');
                  }}>
                  <Thumbnail source={{uri: image}} large />
                  <Body>
                    <Text>{name}</Text>
                    <Text note numberOfLines={3}>
                      {description}
                    </Text>
                    <Text>Precio: $ {price}</Text>
                  </Body>
                </ListItem>
              </Fragment>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};

export default Menu;

const styles = StyleSheet.create({
  header: {backgroundColor: '#000'},
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
