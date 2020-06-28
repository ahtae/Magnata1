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
import RegisterForm from "./screens/RegisterForm";

var firebaseConfig = {
  apiKey: "AIzaSyAv49P7QArAi4yFT4Ir0fswrz-g2v1oQRE",
  authDomain: "magnata-ba19a.firebaseapp.com",
  databaseURL: "https://magnata-ba19a.firebaseio.com",
  projectId: "magnata-ba19a",
  storageBucket: "magnata-ba19a.appspot.com",
  messagingSenderId: "660843609937",
  appId: "1:660843609937:web:4e48e2cc9dce29b276dd70",
  measurementId: "G-KFMDXNDWMW",
};

firebase.initializeApp(firebaseConfig);

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
