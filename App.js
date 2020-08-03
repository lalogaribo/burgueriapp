import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewOrder from './views/NewOrder';
import Menu from './views/Menu';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFDA00',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
