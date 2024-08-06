import React from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import recipes from '../data/recipes'; // Pfad zur 'recipes.ts' Datei

const RecipesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default RecipesScreen;
