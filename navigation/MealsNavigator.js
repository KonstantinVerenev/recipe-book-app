import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import COLORS from '../constants/COLORS';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: COLORS.mainColor
    },
    headerTintColor: 'white'
  }
});

export default createAppContainer(MealsNavigator);