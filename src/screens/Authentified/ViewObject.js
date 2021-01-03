import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import IconText from '../../components/IconText';
import ObjectCard from '../../components/ObjectCard';
import {fetchObject} from '../../redux/reducers/object';

function ViewObject({navigation, route}) {
  const dispatch = useDispatch();
  //subscribe to state
  var state = useSelector((state) => state.root);
  const {object} = route.params;
  React.useEffect(() => {
    //dispatch(fetchObject(objectid));
    //run function
    // dispatch(functionName('test'));
  });

  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    profileInfo: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      padding: 10,
      paddingTop: 20,
    },
    profilePic: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: 'white',
      borderWidth: 3,
    },
    profileInfo1: {justifyContent: 'center', alignItems: 'center'},
    profileInfo2: {
      justifyContent: 'center',
      marginTop: 20,
      paddingLeft: 10,
      paddingBottom: 20,
    },
    objectsPosted: {flex: 2, paddingLeft: 10},
    background: {
      resizeMode: 'cover',
    },
    inforText: {
      color: '#424242',
      paddingTop: 5,
      fontWeight: 'bold',
    },
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#34495e'}}>
      <ScrollView style={styles.container}>
        <View style={{flex: 2}}>
          <ImageBackground
            imageStyle={styles.background}
            source={{
              uri: 'data:image/png;base64,' + object.picture,
            }}
            style={styles.profileInfo}>
            <View
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height / 3,
              }}></View>
          </ImageBackground>
        </View>
        <View style={styles.objectsPosted}>
          <Text
            style={{
              color: '#424242',
              fontSize: 19,
              fontWeight: 'bold',
              padding: 3,
              justifyContent: 'center',
              alignItems: 'center',

              fontFamily: 'Avenir-Black',
            }}>
            {object.type}
          </Text>
          <IconText
            icon="map-pin"
            iconSize={13}
            iconColor={'red'}
            fontSize={14}
            fontColor={'#424242'}
            text={object.location}
          />

          <Text
            style={{
              color: '#424242',
              fontSize: 13,
              fontWeight: 'bold',
              padding: 3,

              fontFamily: 'Avenir-Black',
            }}>
            {object.publisher}
          </Text>
          <Text
            style={{
              color: '#424242',
              fontSize: 16,
              fontWeight: 'bold',
              padding: 3,

              fontFamily: 'Avenir-Black',
            }}>
            {object.context}
          </Text>
          <FlatList data={object.descriptions} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default ViewObject;
