import React from "react";
import { StyleSheet, ScrollView, Button } from "react-native";
import Challenge from "./Challenge";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { toggleStatus } from "../redux/actions/challengeActions";
import Header from "./Header";

const Challenges = ({ navigation }) => {
  const [isLoaded] = useFonts({
    Comfortaa: require("../assets/fonts/Comfortaa.ttf"),
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Header />
      <ScrollView>
        <Challenge
          style={styles.challenge}
          challenge="1. Borrow $5 from a stranger."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          style={styles.challenge}
          challenge="2. Ask for Olympic symbol doughnuts."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="3. Perform at a poetry event."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="4. Ask a stranger to tie your shoe laces."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="5. Ask a stranger for compliments."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="6. Race a random person."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="7. Draw portraits with strangers."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="8. Play rock, paper, scissors with a stranger."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="9. Ask if you can borrow a book from Barnes and Nobles."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="10. Ask strangers to rate your appearance."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="11. Ask a stranger if you can plant a flower in their yard."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="12. Ask if you can borrow a book from Barnes and Nobles."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="13. Ask strangers to rate your appearance."
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="14. Ask a stranger for a high five"
          handleToggleStatus={toggleStatus}
        />
        <Challenge
          challenge="15. Ask a stranger if you can wear their glasses"
          handleToggleStatus={toggleStatus}
        />
        <Button title="submit" onPress={() => navigation.navigate("Home")}>
          Home
        </Button>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textTransform: "uppercase",
    textAlign: "center",
    margin: 20,
    fontFamily: "Comfortaa",
    backgroundColor: "gray",
  },
  challenge: {
    textAlign: "center",
    color: "black",
  },
  scrollView: {
    color: "black",
    backgroundColor: "gray",
  },
});

export default Challenges;
