import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import {Icons} from '../../styles';

export default function TextBox(props) {
  return (
    <View style={styles.View}>
      <View style={styles.rowspace}>
        <TextInput
          style={[styles.input, props.style]}
          placeholder={props.placeholder}
          value={props.value}
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
          placeholderTextColor="#808080"
          secureTextEntry={props.secureTextEntry}
          onSubmitEditing={props.onSubmitEditing}
          maxLength={props.maxLength}
          multiline={props.multiline}
          autoCapitalize={props.autoCapitalize}
          onEndEditing={props.onEndEditing}
        />
        {props.showIcon ? (
          props.hide ? (
            <TouchableOpacity
              onPress={props.onPressIcon}
              style={{
                position: 'absolute',
                right: 0,
              }}>
              <Icons.Vector />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={props.onPressIcon}
              style={{position: 'absolute', right: 0}}>
              <Icons.Vector />
            </TouchableOpacity>
          )
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    //width: '100%',
    //height: 55,
    //borderBottomWidth: 1,
    // borderBottomColor: Colors.LIGHT_GREY,
    //paddingBottom: 20,
    //marginVertical: 15,
    // backgroundColor: 'cyan',
    // width: '100%',
    // alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#6495ed',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#000',
  },
  rowspace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
