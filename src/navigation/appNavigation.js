import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../utils/Routes';
import Screen from '../screens';
import TabNavigation from './tabNavigation';
import {Colors} from '../styles';
// import DrawerNavigation from './drawerNavigation';
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
      <AppStack.Screen name={Routes.Home} component={Screen.Home} />
      <AppStack.Screen name={Routes.Order} component={Screen.Order} />
      <AppStack.Screen name={Routes.Profile} component={Screen.Profile} />
      {/* <AppStack.Screen name={Routes.Drawer} component={Screen.DrawerNavigation} />
      <AppStack.Screen name={Routes.About} component={Screen.About} />
      <AppStack.Screen name={Routes.History} component={Screen.History} /> */}
    </AppStack.Navigator>
  );
}
