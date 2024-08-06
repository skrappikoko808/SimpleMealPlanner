import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
