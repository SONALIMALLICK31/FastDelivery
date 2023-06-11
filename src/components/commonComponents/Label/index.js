import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Label(props) {
  return (
    <View>
      <Text style={[styles.txt, props.style]}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    color: '#000',
    marginBottom: '2%',
  },
});
