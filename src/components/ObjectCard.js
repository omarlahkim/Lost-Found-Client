import * as React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {Title, Paragraph, Subheading, Headline} from 'react-native-paper';
import _ from 'lodash';
import {} from 'react-native-vector-icons';
import IconText from './IconText';
function ObjectCard(props) {
  const size = {
    m: {
      height: 80,
    },
    l: {
      height: 120,
    },
  };
  const styles = {
    container: {
      flex: 1,
      flexDirection: 'row',
      height: size[props.size ? props.size : 'm'].height,
      backgroundColor: '#F9F9F9',
      borderRadius: 0,
      shadowColor: '#fff',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      borderWidth: 1,
      borderColor: '#F1F1F1',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 1,
      margin: 10,
      marginBottom: 2,
      marginTop: 2,
      zIndex: 0,
    },
    imageContainer: {
      width: '40%',
      height: '100%',
      overflow: 'hidden',
    },
    image: {
      flex: 1,
      resizeMode: 'stretch',
      overflow: 'hidden',
    },
    textContainer: {
      padding: 10,
      justifyContent: 'center',
    },
    rowInfo: {
      flexDirection: 'row',
    },
  };
  const data = props.data;

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'data:image/png;base64,' + props.image}}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <IconText
          icon="hands"
          fontColor="#424242"
          iconColor="#27ae60"
          text={data.type}
        />
        <IconText
          icon="map-pin"
          fontColor="#424242"
          iconColor="#e74c3c"
          text={data.location}
        />
        <IconText
          icon="align-left"
          fontColor="#424242"
          iconColor="#2c3e50"
          text={_.truncate(data.context, {separator: ' '})}
        />
      </View>
    </TouchableOpacity>
  );
}

export default ObjectCard;
