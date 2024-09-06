import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { initializeApp } from "firebase/app";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBGBjc7yKpZLhYAHNt0ETV7EO7BVQIMSSA",
  authDomain: "orion-meals.firebaseapp.com",
  projectId: "orion-meals",
  storageBucket: "orion-meals.appspot.com",
  messagingSenderId: "69882003481",
  appId: "1:69882003481:web:2527c5ac944915bed1ea88",
  measurementId: "G-K1PSXK1PEF",
};

initializeApp(firebaseConfig);

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
