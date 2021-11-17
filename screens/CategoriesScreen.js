import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { CATEGORIES } from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';

const CaregoriesScreen = (props) => {

  const renderGridItem = (itemData) => {
    return <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
        props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id });
      }}
    />;
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CaregoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Meals Categories',
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CaregoriesScreen;
