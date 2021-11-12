import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import COLORS from '../constants/COLORS';
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

CaregoriesScreen.navigationOptions = {
  headerTitle: 'Meals Categories'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CaregoriesScreen;
