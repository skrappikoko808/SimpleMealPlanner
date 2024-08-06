import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subtitle}>This is where details will be shown.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#004d40',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default DetailsScreen;
