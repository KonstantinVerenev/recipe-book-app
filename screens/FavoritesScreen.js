import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/data';

const FavoritesScreen = (props) => {
  // just temporaly filtring, need to change
  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;