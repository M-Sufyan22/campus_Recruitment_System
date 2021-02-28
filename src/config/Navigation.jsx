import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import ViewAllCvs from "../screens/viewAllCvs";
import RequestBlood from "../screens/postNewJob";
import Account from "../screens/Account";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { saveCurrentUser } from "../store/action/action";
import firebase from "../config/firebase";

const Tab = createBottomTabNavigator();

function Navigation(props) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // console.log(user.email);

        props.saveCurrentUser(user);
        // console.log(user.email);
      } else {
        console.log("no user found");
        // setUserIsLogin(false);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-outline" : "home";
            } else if (route.name === "viewAllCvs") {
              iconName = focused ? "shapes" : "shapes-outline";
            } else if (route.name === "postAjob") {
              iconName = focused ? "add-circle-outline" : "add-circle";
            } else if (route.name === "C_Account") {
              iconName = focused ? "person-outline" : "person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="viewAllCvs" component={ViewAllCvs} />
        <Tab.Screen name="postAjob" component={RequestBlood} />
        <Tab.Screen name="C_Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
