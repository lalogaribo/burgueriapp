import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Container, Button, Text} from 'native-base';
import globals from '../styles/global';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const NewOrder = () => {
  const navigation = useNavigation();
  return (
    <Container style={globals.container}>
      <View style={[globals.content, styles.content]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Menu')}>
          <Image
            style={styles.burguer}
            source={{
              uri:
                'https://cdn.playbuzz.com/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg',
            }}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.text}>Presiona la hamburguesa</Text>
      </View>
    </Container>
  );
};

export default NewOrder;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  burguer: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    marginTop: 5,
  },
});
