// In App.js in a new project

import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyNavigator(): JSX.Element {
  return (
    <NavigationContainer style={styles.sectionContainer}>
      <Stack.Navigator>
        <Stack.Screen name="Accelerometro" style={styles.sectionTitle} component={HomeScreen} />
        <Stack.Screen name="Giroscopio" style={styles.sectionTitle} component={HomeScreen} />
        <Stack.Screen name="Microfono" style={styles.sectionTitle} component={HomeScreen} />
        <Stack.Screen name="Fotocamera" style={styles.sectionTitle} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MyNavigator;