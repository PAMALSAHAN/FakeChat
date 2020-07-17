
import React from 'react';
import 'react-native-gesture-handler';
import MainStackNavigator from '../ChatApp/src/navigation/MainStackNavigator'
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default function App() {
  return <MainStackNavigator/>
}

