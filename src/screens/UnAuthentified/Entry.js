import * as React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {functionName} from '../../redux/reducers/user';
import Snackbar from 'react-native-snackbar';
function Entry({navigation}) {
  const dispatch = useDispatch();
  //subscribe to state
  var state = useSelector((state) => state.root);
  React.useEffect(() => {
    //run function
    // dispatch(functionName('test'));
  });
  const image = {uri: 'https://reactjs.org/logo-og.png'};
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      }}>
      <Button
        style={{backgroundColor: 'orange'}}
        onPress={() => {
          navigation.navigate('signin');
        }}>
        Signin
      </Button>
      <Button
        style={{backgroundColor: 'yellow'}}
        onPress={() => {
          //navigation.navigate('signup');
          Snackbar.show({
            text: 'error.response.data',
            duration: Snackbar.LENGTH_SHORT,
          });
        }}>
        Signup
      </Button>
    </SafeAreaView>
  );
}
export default Entry;
