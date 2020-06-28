import React from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import { Formik } from "formik";
import { Button } from "react-native-paper";
import * as yup from "yup";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import * as firebase from "firebase";

const FormSchema = yup.object({
  email: yup.string().email("Invalid email!").required("No email provided!"),
  password: yup
    .string()
    .required("No password provided!")
    .min(
      8,
      "The password is too short -- should be at least 8 characters minimum!"
    )
    .max(64, "The password is too long -- at most 64 characters!"),
});

export default function Login({ route, navigation }) {
  const [isLoaded] = useFonts({
    Comfortaa: require("../assets/fonts/Comfortaa.ttf"),
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  const { typeOfForm } = route.params;

  const handleLoginClick = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        navigation.navigate("Manual");
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{typeOfForm}</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
        validationSchema={FormSchema}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="email"
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
            />
            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="password"
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
            />
            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
            <Button
              style={styles.submitButton}
              color="white"
              onPress={() =>
                handleLoginClick(props.values.email, props.values.password)
              }
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "flex-start",
    padding: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    fontSize: 18,
  },
  title: {
    marginTop: 40,
    paddingBottom: 30,
    fontFamily: "Comfortaa",
    fontSize: 36,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginTop: 6,
  },
  submitButton: {
    width: 350,
    backgroundColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    textTransform: "uppercase",
  },
});
