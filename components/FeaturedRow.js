import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
          type-> {
            name
          }
        }
      }[0]`,
        {id},
      )
      .then(data => {
        setRestaurants(data?.restaurants);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="font-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        {/* Restaurant Card */}

        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.genre}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant?.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
