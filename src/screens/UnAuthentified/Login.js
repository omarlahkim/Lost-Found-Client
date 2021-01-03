import * as React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {signin} from '../../redux/reducers/user';
import {authContext} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login() {
  const dispatch = useDispatch();
  //subscribe to state
  var state = useSelector((state) => state.root);
  React.useEffect(() => {
    //run function
    // dispatch(functionName('test'));
    setWidth(Dimensions.get('window').width);
    setHeight(Dimensions.get('window').height);
  }, []);
  const margin = {
    margin: 10,
  };
  const textInputStyle = {
    margin: 10,
  };
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [width, setWidth] = React.useState(null);
  const [height, setHeight] = React.useState(null);
  const [token, setToken] = React.useContext(authContext);

  const login = async () => {
    await dispatch(signin({username, password}));
    const token = await AsyncStorage.getItem('@access_token');
    await setToken(token);
  };

  return (
    <View
      style={{
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
        }}>
        <TextInput
          style={textInputStyle}
          placeholder="Username"
          label="Username"
          autoCapitalize="none"
          value={username}
          onChangeText={(e) => {
            setUsername(e);
          }}
        />
        <TextInput
          style={textInputStyle}
          placeholder="Password"
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
        <Button
          style={margin}
          onPress={async () => {
            await login();
          }}>
          Login
        </Button>
      </View>
    </View>
  );
}
export default Login;
