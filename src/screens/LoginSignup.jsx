// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
  Dimensions,
  Button,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import firebase from "../config/firebase";
import { connect } from "react-redux";
import { saveCurrentUser } from "../store/action/action";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

function LoginSignup(props) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    err: "",
  });
  const [signUpDetail, setsignUpDetail] = useState({
    username: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   if (user !== undefined && user !== null) {
  //     () => props.saveCurrentUser(user);
  //   }
  // }, []);

  // async function loginWithFb() {
  //   try {
  //     await Facebook.initializeAsync({
  //       appId: "328337495107644",
  //     });
  //     const {
  //       type,
  //       token,
  //       expirationDate,
  //       permissions,
  //       declinedPermissions,
  //     } = await Facebook.logInWithReadPermissionsAsync({
  //       permissions: ["public_profile"],
  //     });
  //     if (type === "success") {
  //       // Get the user's name using Facebook's Graph API
  //       const response = await fetch(
  //         `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
  //       );

  //       const user = await response.json();
  //       setUser(user);
  //       () => props.saveCurrentUser(user);

  //       Alert.alert("Logged in!", `Hi ${user.name}!`);
  //     } else {
  //       Alert.alert("Logged in Faild!!", "Some  error accured");
  //     }
  //   } catch ({ message }) {
  //     alert(`Facebook Login Error: ${message}`);
  //   }
  // }
  function login() {
    // console.log(loginDetails.email, loginDetails.password);
    firebase
      .auth()
      .signInWithEmailAndPassword(loginDetails.email, loginDetails.password)
      .then(function (result) {
        console.log("yes user is logged in ", result);
        setLoginDetails({
          email: "",
          password: "",
          err: "",
        });
        setShowLoginForm(false);
      })
      .catch(function (error) {
        var errorMessage = error.message;
        setLoginDetails({
          ...loginDetails,
          err: errorMessage,
        });
        console.log(errorMessage);
      });
  }
  function signUp() {
    console.log(
      signUpDetail.username,
      signUpDetail.email,
      signUpDetail.password
    );
    firebase
      .auth()
      .createUserWithEmailAndPassword(signUpDetail.email, signUpDetail.password)
      .then(function (result) {
        console.log("New user Signup successfully ", result);
        setsignUpDetail({
          username: "",
          email: "",
          password: "",
          err: "",
        });
        setShowLoginForm(false);
      })
      .catch(function (error) {
        var errorMessage = error.message;
        setsignUpDetail({
          ...signUpDetail,
          err: errorMessage,
        });
        console.log(errorMessage);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.logo}
          ></Image>
          &nbsp;Campus
        </Text>
      </View>
      <View style={styles.body}>
        <ImageBackground
          source={require("../../assets/images/image2.jpg")}
          style={styles.image}
        >
          {showLoginForm ? (
            <>
              {showSignupForm ? (
                <>
                  <View>
                    <View style={styles.formGroup}>
                      <View
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            setShowSignupForm(false);
                            setsignUpDetail({
                              username: "",
                              email: "",
                              password: "",
                              err: "",
                            });
                          }}
                          style={{
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                            color: "#fff",
                            backgroundColor: "#f2a60c",
                            borderRadius: 2,
                            marginLeft: 4,
                            marginVertical: 8,
                          }}
                        >
                          <Text>Go Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            setShowLoginForm(false);
                            setShowSignupForm(false);
                            setsignUpDetail({
                              username: "",
                              email: "",
                              password: "",
                              err: "",
                            });
                          }}
                          style={{
                            color: "#fff",
                            backgroundColor: "#fff",
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            width: 21,
                            height: 21,
                            marginTop: 7,
                            marginRight: 5,
                          }}
                        >
                          <AntDesign
                            name="closecircle"
                            size={16}
                            color="#f2a60c"
                          />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        onPress={() => setShowSignupForm(false)}
                        style={{
                          alignSelf: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 22,
                            width: "100%",
                            alignSelf: "center",
                            textAlign: "center",
                            paddingVertical: 5,
                          }}
                        >
                          Sign up
                        </Text>
                        {signUpDetail.err !== "" ||
                        signUpDetail.err !== null ||
                        signUpDetail.err !== undefined ? (
                          <Text
                            style={{
                              color: "yellow",
                              width: "100%",
                              alignSelf: "center",
                              textAlign: "center",
                              paddingHorizontal: 5,
                            }}
                          >
                            {signUpDetail.err}
                          </Text>
                        ) : null}
                      </TouchableOpacity>
                      <View style={styles.formField}>
                        <Text style={styles.label}>UserName</Text>
                        <TextInput
                          style={styles.formInput}
                          placeholder="UserName"
                          onChangeText={(username) =>
                            setsignUpDetail({
                              ...signUpDetail,
                              username: username,
                            })
                          }
                          value={signUpDetail.username}
                        />
                      </View>
                      <View style={styles.formField}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                          style={styles.formInput}
                          placeholder="Email"
                          onChangeText={(email) =>
                            setsignUpDetail({ ...signUpDetail, email: email })
                          }
                          value={signUpDetail.email}
                        />
                      </View>
                      <View style={styles.formField}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                          style={styles.formInput}
                          placeholder="Password"
                          onChangeText={(password) =>
                            setsignUpDetail({
                              ...signUpDetail,
                              password: password,
                            })
                          }
                          value={signUpDetail.password}
                        />
                      </View>
                      <View style={styles.formField}>
                        <TouchableOpacity
                          onPress={signUp}
                          style={{
                            backgroundColor: "#fff",
                            width: 80,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              paddingVertical: 8,
                              fontWeight: "bold",
                            }}
                          >
                            Sign up
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          marginVertical: 8,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "#fff", paddingHorizontal: 3 }}>
                          Already have an account?
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            setShowSignupForm(false);
                            setsignUpDetail({
                              username: "",
                              email: "",
                              password: "",
                              err: "",
                            });
                          }}
                        >
                          <Text style={{ color: "yellow" }}>Login</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </>
              ) : (
                <>
                  <View>
                    <View
                      style={{
                        ...styles.formGroup,
                        backgroundColor: "#4891f0",
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            setShowLoginForm(false),
                              setLoginDetails({
                                email: "",
                                password: "",
                                err: "",
                              });
                          }}
                          style={{
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                            color: "#fff",
                            backgroundColor: "#f2a60c",
                            borderRadius: 2,
                            marginLeft: 4,
                            marginVertical: 8,
                          }}
                        >
                          <Text>Go Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            setShowLoginForm(false);
                            setLoginDetails({
                              email: "",
                              password: "",
                              err: "",
                            });
                          }}
                          style={{
                            color: "#fff",
                            backgroundColor: "#fff",
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            width: 21,
                            height: 21,
                            marginTop: 7,
                            marginRight: 5,
                          }}
                        >
                          <AntDesign
                            name="closecircle"
                            size={16}
                            color="#f2a60c"
                          />
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity
                        onPress={() => setShowLoginForm(false)}
                        style={{
                          alignSelf: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 22,
                            width: "100%",
                            alignSelf: "center",
                            paddingVertical: 5,
                          }}
                        >
                          Login
                        </Text>

                        {loginDetails.err !== "" ||
                        loginDetails.err !== null ||
                        loginDetails.err !== undefined ? (
                          <Text
                            style={{
                              color: "yellow",
                              alignSelf: "center",
                              textAlign: "center",
                              paddingHorizontal: 5,
                            }}
                          >
                            {loginDetails.err}
                          </Text>
                        ) : null}
                      </TouchableOpacity>
                      <View style={styles.formField}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                          style={styles.formInput}
                          placeholder="Email"
                          onChangeText={(email) =>
                            setLoginDetails({ ...loginDetails, email: email })
                          }
                          value={loginDetails.email}
                        />
                      </View>
                      <View style={styles.formField}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                          style={styles.formInput}
                          placeholder="Password"
                          onChangeText={(password) =>
                            setLoginDetails({
                              ...loginDetails,
                              password: password,
                            })
                          }
                          value={loginDetails.password}
                        />
                      </View>
                      <View style={styles.formField}>
                        <TouchableOpacity
                          onPress={login}
                          style={{
                            backgroundColor: "#fff",
                            width: 80,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              paddingVertical: 8,
                              fontWeight: "bold",
                            }}
                          >
                            Login
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          marginVertical: 8,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "#fff", paddingHorizontal: 3 }}>
                          Not have a account?
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            setShowSignupForm(true);
                            setLoginDetails({
                              email: "",
                              password: "",
                              err: "",
                            });
                          }}
                        >
                          <Text style={{ color: "yellow" }}>Sign up</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </>
              )}
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => setShowLoginForm(true)}
                style={{ ...styles.loginBtn, backgroundColor: "#fff" }}
              >
                <Text style={{ color: "#000", fontWeight: "bold" }}>
                  Login Via<Text> </Text>
                  <MaterialCommunityIcons
                    name="gmail"
                    size={18}
                    color="#4891f0"
                  />
                  <Text> Email</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "Sorry for inconvenience",
                    "FaceBook login is not available currently, Iam working on it",
                    [
                      {
                        text: "OK ! Take your time",
                        onPress: () => console.log("OK Pressed"),
                      },
                      {
                        text: "Please work fast ",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                    ]
                  )
                }
                style={{ ...styles.loginBtn, backgroundColor: "#3b5998" }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Login with <Feather name="facebook" size={18} color="#fff" />
                  acebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "Sorry for inconvenience",
                    "Google login is not available currently, Iam working on it",
                    [
                      {
                        text: "OK ! Take your time",
                        onPress: () => console.log("OK Pressed"),
                      },
                      {
                        text: "Please work fast ",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                    ],
                    { cancelable: false }
                  )
                }
                activeOpacity={0.7}
                style={{ ...styles.loginBtn, backgroundColor: "#fff" }}
              >
                <Text style={{ color: "#000", fontWeight: "bold" }}>
                  Login with
                  <Text style={{ color: "#4285F4" }}> G</Text>
                  <Text style={{ color: "#DB4437" }}>o</Text>
                  <Text style={{ color: "#F4B400" }}>o</Text>
                  <Text style={{ color: "#4285F4" }}>g</Text>
                  <Text style={{ color: "#0F9D58" }}>l</Text>
                  <Text style={{ color: "#DB4437" }}>e</Text>
                </Text>
              </TouchableOpacity>
            </>
          )}
        </ImageBackground>
      </View>
    </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    flex: 0.7,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 2.0,

    elevation: 24,
  },
  heading: {
    textAlign: "justify",
    color: "#4897f0",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 3,
    paddingLeft: 10,
  },
  logo: {
    width: 35,
    height: 35,
  },
  body: {
    flex: 6,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 0.5,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  loginBtn: {
    width: "80%",
    paddingTop: 20,
    paddingBottom: 20,
    marginVertical: 3,
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  footerText: {
    color: "#fff",
    textAlign: "center",
  },
  image: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  formGroup: {
    width: width - 25,
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#4891f0",
    borderRadius: 5,
  },
  formField: {
    marginVertical: 5,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  label: { width: width - 55, marginVertical: 5, color: "#fff" },
  formInput: {
    backgroundColor: "#fff",
    color: "#000",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: width - 55,
    borderRadius: 3,
  },
});
