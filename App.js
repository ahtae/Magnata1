import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, FlatList } from "react-native";
import Home from './screens/Home';
import AuthForm from './screens/AuthForm';
import Manual from './screens/Manual';
import Challenges from './screens/Challenges';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducers';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['statusReducer']
};

const Stack = createStackNavigator();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer, applyMiddleware(createLogger())
);
const persistedStore = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Challenges" component={Challenges} />
            <Stack.Screen name="Login" component={AuthForm} />
            <Stack.Screen name="Register" component={AuthForm} />
            <Stack.Screen name="Manual" component={Manual} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
