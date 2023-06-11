import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../utils/Routes';
import Screen from '../screens';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName={Routes.HomeScreen}>
      <Tab.Screen name={Routes.HomeScreen} component={Screen.HomeScreen} />
      <Tab.Screen name={Routes.OrderScreen} component={Screen.OrderScreen} />
      <Tab.Screen name={Routes.ProfileScreen} component={Screen.ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
