import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../utils/Routes';
import Screen from '../screens';
import {Colors} from '../styles';
import TabNavigation from './tabNavigation';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator
      initialRouteName={Routes.SIGNIN}
      screenOptions={{
        animationEnabled: true,
        headerStyle: {
          backgroundColor: Colors.WHITE,
        },
        gestureEnabled: false,
        headerShown: false,
      }}>
      <AuthStack.Screen
        name={Routes.SIGNUP}
        component={Screen.SIGNUP}
      />
      <AuthStack.Screen
        name={Routes.SIGNIN}
        component={Screen.SIGNIN}
      />
      {/* <AuthStack.Screen
        name={Routes.CreatePassword}
        component={Screen.CreatePassword}
      />
      <AuthStack.Screen
        name={Routes.ForgotPassword}
        component={Screen.ForgotPassword}
      />
      <AuthStack.Screen
        name={Routes.EmailVerification}
        component={Screen.EmailVerification}
      /> */}
    </AuthStack.Navigator>
  );
}
