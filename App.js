import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CreateNewMovieScreen from './screens/CreateNewMovieScreen';

import configureStore from './store/createStore';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  Create: { screen: CreateNewMovieScreen }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    if (this.state.isLoading) {
        return null;
    }

    return (
      <Provider store={this.state.store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
