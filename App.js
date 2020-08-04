import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NewOrder from './views/NewOrder';
import Menu from './views/Menu';
import PlateDetail from './views/PlateDetail';
import OrderResume from './views/OrderResume';
import Login from './views/Login';
import ProgressOrder from './views/ProgressOrder';
import Form from './views/Form';

import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/orders/ordersState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="NewOrder"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#909ef5',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTintColor: '#000',
              }}>
              <Stack.Screen
                name="NewOrder"
                component={NewOrder}
                options={{
                  title: 'Nueva Orden',
                }}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                  title: 'Menu',
                }}
              />
              <Stack.Screen
                name="PlateDetail"
                component={PlateDetail}
                options={{
                  title: 'Detalles platillo',
                }}
              />
              <Stack.Screen
                name="OrderResume"
                component={OrderResume}
                options={{
                  title: 'Resumen pedido',
                }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  title: 'Iniciar sesion',
                }}
              />
              <Stack.Screen
                name="OrderProgress"
                component={ProgressOrder}
                options={{
                  title: 'Estado de pedido',
                }}
              />
              <Stack.Screen
                name="OrderForm"
                component={Form}
                options={{
                  title: 'Ordernar',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </>
  );
};

export default App;
