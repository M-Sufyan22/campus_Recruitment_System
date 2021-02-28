import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import firebase from "./src/config/firebase";
import Navigation from "./src/config/Navigation";
import LoginSignup from "./src/screens/LoginSignup";

export default function App() {
  const [userIsLogin, setUserIsLogin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.email);
        setUserIsLogin(true);
      } else {
        console.log("no user found");
        setUserIsLogin(false);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {userIsLogin ? <Navigation /> : <LoginSignup />}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
