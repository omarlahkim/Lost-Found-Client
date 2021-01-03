import * as React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TextInput, Button, Menu, Divider} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {createObjectRed} from '../../redux/reducers/object';
import {launchImageLibrary} from 'react-native-image-picker';
import Picker from '../../components/Picker';
import {styles} from '../../theme/themes/theme1/index';
import useStateRef from 'react-usestateref';
import ImageResizer from 'react-native-image-resizer';
var RNFS = require('react-native-fs');

function AddObject() {
  const dispatch = useDispatch();
  //subscribe to state
  var state = useSelector((state) => state.root);
  const [context, setContext, contextRef] = useStateRef(null);
  const [objectPic, setObjectPic, objectPicRef] = useStateRef(null);
  const [location, setLocation, locationRef] = useStateRef(null);
  const [type, setType, typeRef] = useStateRef(null);
  var locationChosen = locationRef.current;
  var typeChosen = typeRef.current;
  var contextChosen = contextRef.current;
  var objectPicChosen = objectPicRef.current;
  React.useEffect(() => {
    //run function
  });
  handleBase64 = async (path) => {
    const resizedImageUrl = await ImageResizer.createResizedImage(
      path,
      1000,
      400,
      'PNG',
      70,
      0,
      RNFS.DocumentDirectoryPath,
    );
    const base64 = await RNFS.readFile(resizedImageUrl.uri, 'base64');
    return base64;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollcontainer}>
        <Text
          style={{
            color: '#424242',
            fontSize: 27,
            fontWeight: 'bold',
            padding: 10,
            fontFamily: 'Avenir-Black',
          }}>
          Report the object
        </Text>
        <View style={styles.picture}>
          <TouchableOpacity
            onPress={() => {
              launchImageLibrary(
                {
                  mediaType: 'photo',
                  quality: 0.3,
                  includeBase64: true,
                  maxHeight: 1080,
                },
                async (res) => {
                  img = await handleBase64(res.uri);
                  await setObjectPic(img);
                },
              );
            }}
            style={{
              backgroundColor: '#424242',
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ImageBackground
              source={{uri: 'data:image/png;base64,' + objectPicChosen}}
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 50}}>+</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            zIndex: 999,
            alignSelf: 'center',
          }}>
          <Picker
            defaultValue={location}
            label="type"
            type="type"
            onChangeItem={async (item) => {
              await setLocation(item.value);
            }}
          />
          <Picker
            defaultValue={type}
            label="location"
            type="location"
            onChangeItem={async (item) => {
              await setType(item.value);
            }}
          />
        </View>
        <TextInput
          placeholder="Context"
          label="Context"
          multiline
          value={context}
          onChangeText={(text) => {
            setContext(text);
          }}
          style={styles.textInput}
        />

        <Button
          onPress={async () => {
            await dispatch(
              createObjectRed({
                typeChosen,
                locationChosen,
                contextChosen,
                objectPicChosen,
              }),
            );
          }}
          style={styles.button}>
          Report Object
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
export default AddObject;
