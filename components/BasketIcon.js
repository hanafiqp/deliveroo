import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {selectBasketItems, selectBasketTotal} from '../features/basketSlice';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) {
    return null;
  }

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="flex-row bg-[#00ccbb] mx-5 p-3 rounded-lg  items-center space-x-1 "
        onPress={() => navigation.navigate('Basket')}>
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-white font-extrabold text-lg text-center">
          <Currency quantity={basketTotal} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
