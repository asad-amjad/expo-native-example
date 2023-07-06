import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';

const HomeScreen = () => {
  const isWeb = Platform.OS === 'web';

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://dummyimage.com/300x200/ccc/000' }}
        style={styles.image}
      />
      <Text style={isWeb ? styles.webTitle : styles.mobileTitle}>
        {isWeb ? 'Hello from web' : 'Hello from mobile'}
      </Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis
        accumsan diam, non efficitur odio efficitur at. Nulla facilisi.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 16,
  },
  webTitle: {
    color: 'blue', // Set the desired text color for web
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  mobileTitle: {
    color: 'red', // Set the desired text color for mobile
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
