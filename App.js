import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AddScreen from './screens/AddScreen';

import store from './store/createStore';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  Add: { screen: AddScreen },
});

const App = () => (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
);

export default App;
