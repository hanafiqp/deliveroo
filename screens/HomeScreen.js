import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';

import sanityClient from '../sanity';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "featured"]`)
      .then(data => {
        setFeaturedCategories(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // console.log(featuredCategories[0].restaurants);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Header */}

      {/* Search */}
      <View className="flex-row items-center mx-4 pb-2 space-x-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 px-2 items-center">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsIcon color="#00CCBB" />
      </View>
      {/* Search */}

      {/* Body */}
      <ScrollView
        className="bg-gray-100 flex-1"
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/* Categories */}
        <Categories />
        {/*  Featured Rows */}

        {featuredCategories.map(category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
