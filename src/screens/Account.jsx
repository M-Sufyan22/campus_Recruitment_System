import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import firebase from "../config/firebase";
import { connect } from "react-redux";
import { saveCurrentUser } from "../store/action/action";

function Account(props) {
  function signOut() {
    Alert.alert(
      "Confirm",
      "Are you sure Logout?",
      [
        {
          text: "OK",
          onPress: () => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                // Sign-out successful.
                console.log("sign out successfully");
              })
              .catch((error) => {
                console.log("sign out failed!");
              });
          },
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
      ],
      { cancelable: false }
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.pageHeading}>My Account</Text>
      {props.currentUser.photoURL !== null ? (
        <View style={styles.userImgWrapper}>
          <Image
            style={styles.userImg}
            source={{
              uri: props.currentUser.photoURL,
            }}
          />
        </View>
      ) : (
        <View style={styles.userImgWrapper}>
          <Image
            style={styles.userImg}
            source={{
              uri:
                "https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png",
            }}
          />
        </View>
      )}
      <View style={styles.bottomSec}>
        <View style={styles.userDetails}>
          <Text style={styles.userTabs}>Email: {props.currentUser.email}</Text>
          <TouchableOpacity
            onPress={signOut}
            style={{ ...styles.userTabs, backgroundColor: "lightblue" }}
          >
            <Text>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

const mapDispatchToProps = (dispatch) => ({
  saveCurrentUser: (user) => dispatch(saveCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pageHeading: {
    width: "100%",
    backgroundColor: "red",
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: "auto",
  },
  userImgWrapper: {
    flex: 2,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  userImg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "#000",
  },
  bottomSec: {
    flex: 4,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  userDetails: {
    backgroundColor: "red",
    flex: 0.8,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  userTabs: {
    width: "100%",
    paddingVertical: 8,
    backgroundColor: "lightgreen",
    marginVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
