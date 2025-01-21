import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculadoraIMC from './components/CalculadoraIMC';

export default class App extends Component {
  render() {
    return (
      <CalculadoraIMC></CalculadoraIMC>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
