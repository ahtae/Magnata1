import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import checkIfFirstLaunch from "../redux/actions/hasLaunched";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

const Manual = ({ navigation }) => {
  const [isLoaded] = useFonts({
    Comfortaa: require("../assets/fonts/Comfortaa.ttf"),
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Mågnata! 🤗</Text>
      </View>
      <View>
        <Text style={styles.body}>
          This application was inspired by the rejection therapy game created by
          Jason Comely and popularized by Jia Jiang in his TED Talk called "What
          I learned from 100 days of rejection." The rules of the game are
          simple. There is only one real rule; you be rejected by another person
          at least once, everyday. However, for it to count as a rejection, you
          have to be out of your comfort zone, for your request to be denied,
          and for you to be in the position of vulnerability.
        </Text>
        <Button
          style={styles.nextButton}
          color="white"
          onPress={() => navigation.navigate("Challenges")}
        >
          Next
        </Button>
      </View>
    </View>
  );
};

export default Manual;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#62788E",
  },
  body: {
    margin: 30,
    fontSize: 20,
  },
  title: {
    fontFamily: "Comfortaa",
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  nextButton: {
    width: 160,
    backgroundColor: "black",
    marginTop: 30,
    marginLeft: 120,
    borderWidth: 2,
    borderRadius: 6,
    textTransform: "uppercase",
  },
});
