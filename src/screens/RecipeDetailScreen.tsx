import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.details}>{recipe.details}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default RecipeDetailScreen;
