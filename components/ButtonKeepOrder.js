import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, Icon} from 'native-base';
import globals from '../styles/global';

const ButtonKeepOrder = () => {
  const navigation = useNavigation();

  return (
    <Button
      iconLeft
      style={{backgroundColor: '#909ef5'}}
      onPress={() => navigation.navigate('Menu')}>
      <Text style={globals.textButton}>Menu</Text>
    </Button>
  );
};

export default ButtonKeepOrder;
