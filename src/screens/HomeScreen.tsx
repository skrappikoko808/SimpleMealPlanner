import React from 'react';
import { SafeAreaView, Button, StyleSheet, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Willkommen zum SimpleMealPlanner!</Text>
        <Button
          title="Zu den Rezepten"
          onPress={() => navigation.navigate('Recipes')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
