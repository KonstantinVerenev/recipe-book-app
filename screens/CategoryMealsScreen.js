import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import COLORS from '../constants/COLORS';
import { CATEGORIES } from '../data/data';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(category => category.id === catId);

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button title={'Go to one concrete Meal!'} onPress={() => { props.navigation.navigate('MealDetail'); }} />
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
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
