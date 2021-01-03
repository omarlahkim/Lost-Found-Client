import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function Picker(props) {
  const locationItems = [
    {
      label: 'USA',
      value: 'usa',
    },
    {
      label: 'UK',
      value: 'uk',
    },
    {
      label: 'France',
      value: 'france',
    },
  ];
  const typeItems = [
    {
      label: 'France',
      value: 'france',
    },
    {
      label: 'UK',
      value: 'uk',
    },
  ];

  return (
    <View>
      <Text
        style={{
          color: '#424242',
          fontSize: 13,
          fontWeight: 'bold',
          fontFamily: 'Avenir-Black',
        }}>
        {props.label}:
      </Text>
      <DropDownPicker
        searchable
        style={styles.picker}
        onChangeItem={props.onChangeItem}
        items={props.type == 'location' ? locationItems : typeItems}
        defaultValue={props.defaultValue}
        itemStyle={styles.item}
        containerStyle={styles.container}
        dropDownStyle={styles.dropdown}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: Dimensions.get('screen').width / 2 - 10,
    backgroundColor: '#fafafa',
    zIndex: 999,
  },
  container: {height: 40},
  item: {justifyContent: 'flex-start'},
  dropdown: {backgroundColor: '#fafafa'},
});

export default Picker;
