import * as React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {functionName} from '../../redux/reducers/user';

function Register() {
  const dispatch = useDispatch();
  //subscribe to state
  var state = useSelector((state) => state.root);
  React.useEffect(() => {
    console.log(state);
    //run function
    // dispatch(functionName('test'));
  });
  const margin = {
    margin: 10,
  };
  const textInputStyle = {
    margin: 10,
  };
  const [fullname, setFullname] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const register = () => {};

  return (
    <View
      style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
        }}>
        <TextInput
          style={textInputStyle}
          placeholder="Full Name"
          label="Full Name"
          value={fullname}
          onChange={(e) => {
            setFullname(e.value);
          }}
        />
        <TextInput
          style={textInputStyle}
          placeholder="Username"
          label="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.value);
          }}
        />
        <TextInput
          style={textInputStyle}
          placeholder="Email"
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.value);
          }}
        />
        <TextInput
          style={textInputStyle}
          placeholder="Password"
          label="Password"
          secureTextEntry={true}
          value={password}
          onChange={(e) => {
            setPassword(e.value);
          }}
        />
        <Button
          style={margin}
          onPress={() => {
            register();
          }}>
          Register
        </Button>
      </View>
    </View>
  );
}
export default Register;
