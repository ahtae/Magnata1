import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Manual from "./screens/Manual";
import LoginForm from "./screens/LoginForm";
import Challenges from "./screens/Challenges";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import { PersistGate } from "redux-persist/integration/react";
import * as firebase from "firebase";
import 'firebase/firestore';
import RegisterForm from "./screens/RegisterForm";
import React from 'react';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
export const ChallengesRef = db.collection('Users');

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["statusReducer", "navigation"],
};

const Stack = createStackNavigator();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(createLogger()));
const persistedStore = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={LoginForm} />
            <Stack.Screen name="Register" component={RegisterForm} />
            <Stack.Screen name="Manual" component={Manual} />
            <Stack.Screen name="Challenges" component={Challenges} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
