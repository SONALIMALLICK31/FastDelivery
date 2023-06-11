import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icons} from '../../../styles';

export default function Topbar(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconView} onPress={props.onPress}>
        <Icons.Back />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 113,
    width: '100%',
    backgroundColor: '#6495ed',
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 40,
    width: '90%',
    //backgroundColor: 'black',
    marginTop: 55,
  },
  iconView: {
    height: 40,
    width: '10%',
    //backgroundColor: 'cyan',
    marginTop: 55,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
