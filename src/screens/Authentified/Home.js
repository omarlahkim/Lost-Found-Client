import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList,
  RefreshControl,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {fetchObjects, fetchObject} from '../../redux/reducers/object';
import ObjectCard from '../../components/ObjectCard';
import Picker from '../../components/Picker';
import useStateRef from 'react-usestateref';

function Home({navigation}) {
  const dispatch = useDispatch();
  //subscribe to state
  var state = useSelector((state) => state.root);
  const [location, setLocation, locationRef] = useStateRef(null);
  const [type, setType, typeRef] = useStateRef(null);
  const [refreshing, setRefreshing, refreshingRef] = useStateRef(false);
  React.useEffect(() => {
    //run function
    var locationChosen = locationRef.current;
    var typeChosen = typeRef.current;
    dispatch(fetchObjects({location: locationChosen, type: typeChosen}));
  }, [locationRef.current, typeRef.current]);

  const header = () => (
    <View style={{zIndex: 9999}}>
      <Text
        style={{
          color: '#424242',
          fontSize: 25,
          fontWeight: 'bold',
          padding: 10,
          paddingBottom: 5,
          fontFamily: 'Avenir-Black',
        }}>
        Filters
      </Text>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          zIndex: 999,
          alignSelf: 'center',
          padding: 10,
        }}>
        <Picker
          defaultValue={location}
          type="type"
          label="type"
          onChangeItem={(item) => {
            setType(item.value);
          }}
        />
        <Picker
          defaultValue={type}
          label="location"
          type="location"
          onChangeItem={async (item) => {
            await setLocation(item.value);
          }}
        />
      </View>
      <Divider />
      <Text
        style={{
          color: '#424242',
          fontSize: 25,
          fontWeight: 'bold',
          padding: 10,
          fontFamily: 'Avenir-Black',
        }}>
        Objects
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
        //await console.log(item._id);
        await dispatch(fetchObject(item._id));
        await navigation.navigate('object', {object: item});
      }}
    />
  );

  const objects = state.object.objects;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#34495e',
      }}>
      <FlatList
        style={{backgroundColor: 'white'}}
        keyExtractor={(item) => item._id}
        data={state.object.objects}
        ListHeaderComponent={header}
        renderItem={card}
        refreshControl={
          <RefreshControl
            refreshing={refreshingRef.current}
            onRefresh={async () => {
              await dispatch(
                fetchObjects({
                  location: locationRef.current,
                  type: typeRef.current,
                }),
              );
            }}
          />
        }
      />
    </SafeAreaView>
  );
}
export default Home;
