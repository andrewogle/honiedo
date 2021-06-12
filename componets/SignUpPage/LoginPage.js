import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import LoginStyles from "./LoginStyles";
import { useFonts, Lobster_400Regular} from "@expo-google-fonts/lobster";
import AppLoading from 'expo-app-loading';

const LoginPage = (props) => {
  const [fontsLoaded] = useFonts( {Lobster_400Regular});
  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HonieDo!</Text>
      </View>
    );
  }
}
;

const styles = StyleSheet.create(LoginStyles);

export default LoginPage;
