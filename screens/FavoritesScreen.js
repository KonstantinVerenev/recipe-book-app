import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import MealList from '../components/MealList';
import { MEALS } from '../data/data';

const FavoritesScreen = (props) => {
  // just temporaly filtring, need to change
  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Favorites Meals',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => { navigationData.navigation.toggleDrawer(); }}
          />
        </HeaderButtons >
      );
    }
  };
};

export default FavoritesScreen;