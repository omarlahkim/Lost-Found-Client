import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IconText = (props) => {
  return (
    <View style={{flexDirection: 'row', padding: 3}}>
      <Icon name={props.icon} color={props.iconColor} size={props.iconSize} />
      <Text
        style={{
          color: props.fontColor,
          fontSize: props.fontSize,
          fontWeight: 'bold',
          paddingLeft: 3,
          fontFamily: 'Avenir-Black',
        }}>
        {props.text}
      </Text>
    </View>
  );
};

export default IconText;
