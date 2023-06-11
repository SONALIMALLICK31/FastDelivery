import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../utils/Routes';
import Screen from '../screens';
import TabNavigation from './tabNavigation';
import {Colors} from '../styles';

const AppStack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <AppStack.Navigator
      initialRouteName={Routes.Tab}
      screenOptions={{
        animationEnabled: true,
        headerStyle: {
          backgroundColor: Colors.WHITE,
        },
        gestureEnabled: false,
        headerShown: false,
      }}>
      <AppStack.Screen name={Routes.Tab} component={TabNavigation} />
      <AppStack.Screen name={Routes.HomeScreen} component={Screen.HomeScreen} />
      <AppStack.Screen name={Routes.OrderScreen} component={Screen.OrderScreen} />
      <AppStack.Screen name={Routes.ProfileScreeen} component={Screen.ProfileScreeen} />
    </AppStack.Navigator>
  );
}
