import React from "react";
import { StyleSheet, Platform } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import AboutScreen from "./src/screens/AboutScreen";
import LandingPage from "./src/screens/LandingPage";
import CardDetail from "./src/screens/CardDetail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Custom theme for navigation
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const App = () => {
  // Conditionally render the navigator based on the platform
  const renderNavigator = () => {
    if (Platform.OS === "android" || Platform.OS === "ios") {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={LandingPage} />
          <Tab.Screen name="About" component={AboutScreen} />
          <Tab.Screen name="CardDetail" component={CardDetail} />
        </Tab.Navigator>
      );
    } else {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LandingPage}
            options={{
              headerShown: true,
              headerTitle: "On web",
              headerTitleStyle: styles.headerText,
              headerTintColor: "black",
              headerStyle: { backgroundColor: "white" },
            }}
          />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="CardDetail" component={CardDetail} />
        </Stack.Navigator>
      );
    }
  };

  return (
    <NavigationContainer theme={theme}>
      {renderNavigator()}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default App;
