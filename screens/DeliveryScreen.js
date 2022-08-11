import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {getStore} from '../helpers/shortcut';
import {selectRestaurant} from '../features/restaurantSlice';
import {XIcon} from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
// import MapView from 'react-native-maps';
// import MapboxGL from '@react-native-mapbox-gl/maps';

// MapboxGL.setAccessToken(
//   'pk.eyJ1IjoiaGFuYWZpcSIsImEiOiJjangwM2N6ZGkwZ2YzNDlwb2VueDFzYjdjIn0.gJa2aKbVqmJ-nAFn8lc1Xg',
// );

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = getStore(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-lg font-light text-white">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-xl p-6 z-50 shadow-md ">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{uri: 'https://links.papareact.com/fls'}}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className=" text-gray-500 mt-3">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      {/* <MapboxGL.MapView className="flex-1" /> */}
      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
      <View>
        <Text>Asdsad</Text>
      </View>
    </View>
  );
};

export default DeliveryScreen;
