import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryCard from './CategoryCard';
import sanityClient from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "category"]`)
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(categories);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* Category Card */}
      {categories.map(category => (
        <CategoryCard key={category._id} imgUrl={category.image} />
      ))}
    </ScrollView>
  );
};

export default Categories;
