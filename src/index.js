import React from 'react';
import {StatusBar} from 'react-native';
import Navigations from './navigation';
import {Colors} from './styles';

export default function () {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.WHITE}
        barStyle={'dark-content'}
        translucent={true}
        showHideTransition={'fade'}
        hidden={false}
      />

      <Navigations />
    </>
  );
}
