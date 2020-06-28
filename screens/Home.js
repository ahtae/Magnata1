import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

export default function Home({ navigation }) {
  const [isLoaded] = useFonts({
    Comfortaa: require("../assets/fonts/Comfortaa.ttf"),
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mågnata</Text>
      <Image
        style={styles.img}
        source={require("../assets/images/night.png")}
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.loginButton}
          mode="outlined"
          color="black"
          onPress={() => navigation.navigate("Login", { typeOfForm: "Login" })}
        >
          Login
        </Button>
        <Button
          style={styles.registerButton}
          color="white"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Comfortaa",
    fontSize: 48,
  },
  img: {
    width: 350,
    height: 350,
    margin: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  loginButton: {
    width: 160,
    fontSize: 30,
    fontWeight: "bold",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    margin: 10,
    textTransform: "uppercase",
    fontFamily: "Roboto",
  },
  registerButton: {
    width: 160,
    backgroundColor: "black",
    margin: 10,
    borderWidth: 2,
    borderRadius: 6,
    textTransform: "uppercase",
    fontFamily: "Roboto",
  },
});
