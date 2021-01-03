import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
  RefreshControl,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Title, Button, Divider} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import ObjectCard from '../../components/ObjectCard';
import {fetchObjectsByUser} from '../../redux/reducers/object';
import {getUserInfo} from '../../redux/reducers/user';
import Icon from 'react-native-vector-icons/FontAwesome5';
import jwt_decode from 'jwt-decode';
import useStateRef from 'react-usestateref';

function Profile({navigation, route}) {
  const dispatch = useDispatch();
  //subscribe to state
  var state = useSelector((state) => state.root);
  const [userid, setUserId, userIdRef] = useStateRef(null);

  React.useEffect(() => {
    //run function
    try {
      const {userid} = route.params;
      setUserId(userid);
    } catch (e) {
      AsyncStorage.getItem('@access_token').then((token) => {
        var {_id} = jwt_decode(token);
        setUserId(_id);
      });
      dispatch(fetchObjectsByUser(userIdRef.current));
      dispatch(getUserInfo(userIdRef.current));
    }
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
      resizeMode: 'repeat',
    },
    inforText: {
      color: '#424242',
      paddingTop: 5,
      fontWeight: 'bold',
    },
  };
  var {objects} = state.object;

  var {username, email, role, full_name, profile_picture} = state.user.tempuser;

  const header = () => (
    <View style={{zIndex: 9999}}>
      <ImageBackground
        imageStyle={styles.background}
        source={{
          uri:
            'https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png',
        }}
        style={styles.profileInfo}>
        <View style={styles.profileInfo1}>
          <Image
            source={{
              uri: 'data:image/png;base64,' + profile_picture,
            }}
            style={styles.profilePic}
          />
          <Text style={styles.inforText}>{username}</Text>
        </View>
        <View style={styles.profileInfo2}>
          <Text style={styles.inforText}>Full Name: {full_name}</Text>
          <Text style={styles.inforText}>Email: {email}</Text>
          <Text style={styles.inforText}>Role: {role}</Text>
        </View>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={() => {}}>
          Contact on Facebook
        </Icon.Button>
      </ImageBackground>
      <Text
        style={{
          color: '#424242',
          fontSize: 25,
          fontWeight: 'bold',
          padding: 10,
          paddingBottom: 5,
          fontFamily: 'Avenir-Black',
        }}>
        Published Objects
      </Text>
    </View>
  );
  const card = ({item}) => (
    <ObjectCard
      key={item._id}
      style={{
        zIndex: 0,
      }}
      data={item}
      size="l"
      image={item.picture}
      onPress={async () => {
        dispatch(fetchObjectsByUser(userIdRef.current));
        await navigation.navigate('object', {object: item});
      }}
    />
  );
  const [refreshing, setRefreshing, refreshingRef] = useStateRef(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#34495e'}}>
      <View style={styles.container}>
        <View style={styles.objectsPosted}>
          <FlatList
            style={{backgroundColor: 'white'}}
            keyExtractor={(item) => item._id}
            data={state.object.userobjects}
            ListHeaderComponent={header}
            renderItem={card}
            refreshControl={
              <RefreshControl
                refreshing={refreshingRef.current}
                onRefresh={async () => {
                  await dispatch(fetchObjectsByUser(userIdRef.current));
                  await dispatch(getUserInfo(userIdRef.current));
                }}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Profile;
