import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#34495e',
  },
  rowPickerContainer: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 999,
  },
  dropdownpikerinrow: {
    width: Dimensions.get('screen').width / 2 - 10,
    backgroundColor: '#fafafa',
    zIndex: 999,
  },
  scroll: {
    flex: 1,
    height: '100%',
    margin: 5,
    padding: 15,
  },
  scrollcontainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  picture: {
    alignItems: 'center',
    padding: 40,
  },
  textInput: {
    marginBottom: 5,
    marginTop: 5,
    margin: 10,
  },
  button: {
    marginTop: 30,
    margin: 10,
  },
});
