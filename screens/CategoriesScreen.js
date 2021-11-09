import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import COLORS from '../constants/COLORS';
import { CATEGORIES } from '../data/data';

const CaregoriesScreen = (props) => {

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id });
        }}>
        <View>
          <Text>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CaregoriesScreen.navigationOptions = {
  headerTitle: 'Meals Categories',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: COLORS.mainColor
  },
  headerTintColor: 'white'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CaregoriesScreen;
