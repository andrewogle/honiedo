import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Lobster_400Regular} from "@expo-google-fonts/lobster";
import AppLoading from 'expo-app-loading';

import LoginPage from "./componets/SignUpPage/LoginPage";

export default function App() {
  const [fontsLoaded] = useFonts( {Lobster_400Regular});
  if(!fontsLoaded){
    return <AppLoading/>
  }else{


    return (
      <View style={styles.container}>
        <LoginPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
