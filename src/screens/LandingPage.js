import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const LandingPage = () => {
  const navigation = useNavigation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animation] = useState(new Animated.Value(0));

  const data = [
    {
      id: 1,
      title: 'Tesla',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Honda',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Bmw',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleCardPress = (id) => {
    const selectedCard = data.find((item) => item.id === id);
    if (selectedCard) {
      navigation.navigate("CardDetail", selectedCard);
    }
  };

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };


  const fadeInAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <ImageBackground
      source={{ uri: 'https://c1.wallpaperflare.com/preview/218/43/767/road-highway-night-dark.jpg' }} // Replace with your actual dummy image URL
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome Screen</Text>
        <View style={styles.cardContainer}>
          {data.map((item) => (
            <Animated.View
              key={item.id}
              style={[
                styles.card,
                {
                  opacity: fadeInAnimation,
                  transform: [
                    {
                      translateY: fadeInAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [30, 0],
                      }),
                    },
                  ],
                },
                hoveredCard === item.id ? styles.hovered : null,
              ]}
            >
              <TouchableOpacity
                onPress={() => handleCardPress(item.id)}
                onMouseEnter={() => handleCardHover(item.id)}
                onMouseLeave={handleCardLeave}
                activeOpacity={0.7}
              >
          
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: wp("5%"),
  },
  heading: {
    fontSize: hp("5%"),
    fontWeight: "bold",
    marginBottom: hp("2%"),
    color: "white", // Text color for the heading
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    width: Dimensions.get("window").width > 600 ? "30%" : "90%",
    margin: 10,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    cursor: "pointer",
    opacity: 1,
    transitionProperty: "opacity",
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease",
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
  },
  hovered: {
    opacity: 0.7,
  },
});

export default LandingPage;
