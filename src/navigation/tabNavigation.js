import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../utils/Routes';
import Screen from '../screens';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName={Routes.Home}>
      <Tab.Screen name={Routes.Home} component={Screen.Home} />
      <Tab.Screen name={Routes.Order} component={Screen.Order} />
      <Tab.Screen name={Routes.Profile} component={Screen.Profile} />


      {/* screenOptions={({ Routes }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = Routes.name;

          if (rn ===Home) {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn ===Order) {
            iconName = focused ? 'order' : 'order-outline';

          } else if (rn ===Profile) {
            iconName = focused ? 'profile' : 'account-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })} */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
