import {Platform, StyleSheet} from 'react-native';
import { Colors } from '.';

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowAllCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  basicCenter: {justifyContent: 'center', alignItems: 'center'},
  buttonView: {
    height: 60,
    width: '90%',
  },
  buttonTitle: {
    textAlign: 'center',
    marginVertical: '4%',
    fontSize: 23,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    // position:'absolute',
    bottom: Platform.OS === 'ios' ? '2%' : '3%',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default _styles;
