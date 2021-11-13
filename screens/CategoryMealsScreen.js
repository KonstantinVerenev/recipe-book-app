import React from 'react';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/data';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) !== -1);

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(category => category.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

// CategoryMealsScreen.navigationOptions = {
//   headerTitle: 'Meal Screen',
//   headerTitleAlign: 'center',
//   headerStyle: {
//     backgroundColor: COLORS.mainColor
//   },
//   headerTintColor: 'white'
// };



export default CategoryMealsScreen;
