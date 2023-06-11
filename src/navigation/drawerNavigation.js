import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from '../utils/Routes';
import Screen from '../screens';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return(
        <Drawer.Navigator initialRouteName='About'>
        <Drawer.Screen name={Routes.About} component={Screen.About}/>
        <Drawer.Screen name={Routes.History} component={Screen.History}/>




        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({});