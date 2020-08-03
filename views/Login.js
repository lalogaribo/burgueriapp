import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

const Login = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handleLogin}>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5heEJqUzxvNGh0KdzB_b_VlXbzSQenjpbaw&usqp=CAU',
          }}
        />
      </TouchableWithoutFeedback>
      <Button title="Iniciar sesion" />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b5bef5',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 100,
  },
});
