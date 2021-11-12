import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/data';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) !== -1);

  const renderItem = ({ item }) => {
    return <MealItem
      title={item.title}
      image={item.imageUrl}
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
      onSelect={() => {
        props.navigation.navigate('MealDetail', { mealId: item.id });
      }}
    />;
  };

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderItem} style={styles.mealsList} />
    </View>
  );
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  mealsList: {
    width: '100%'
  }
});

export default CategoryMealsScreen;
