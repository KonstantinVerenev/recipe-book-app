import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
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
    <View style={styles.mealListContainer}>
      <FlatList data={props.listData} renderItem={renderItem} style={styles.mealsList} />
    </View>
  );
};

const styles = StyleSheet.create({
  mealListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  mealsList: {
    width: '100%'
  }
});

export default MealList;
