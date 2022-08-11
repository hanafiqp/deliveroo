import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

export const getStore = selector => {
  return useSelector(selector);
};
