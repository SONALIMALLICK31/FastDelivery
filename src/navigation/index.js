import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from './authNavigation';

import AppNavigation from './appNavigation';
import {Routes} from '../utils/Routes';

const RootStack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Routes.Auth}
        screenOptions={{
          animationEnabled: true,
          header: false,
          gestureDirection: 'horizontal',
          gestureEnabled: false,
        }}>
        <RootStack.Screen
          name={Routes.Auth}
          component={AuthNavigation}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={Routes.App}
          component={AppNavigation}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
