import {StyleSheet} from 'react-native';

const globals = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: '3.5%',
    flex: 1,
  },
  button: {
    backgroundColor: '#909ef5',
  },
  textButton: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 25,
  },
  quantity: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default globals;
