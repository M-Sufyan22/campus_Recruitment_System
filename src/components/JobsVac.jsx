import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

export default function JobVac(props) {
  return (
    <View style={styles.postWrapper}>
      <View style={styles.postTop}>
        <Image
          style={styles.userImg}
          source={{
            uri:
              "https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png",
          }}
        />

        <View style={styles.userDetail}>
          <Text style={styles.userName}>360 Digital co</Text>
          <Text style={styles.requireBlood}>
            <Text style={styles.placeName}>Gulshan Karachi</Text>
          </Text>
          <Text style={styles.postTime}>about 1 hour ago</Text>
        </View>
      </View>
      <View style={styles.postBody}>
        <View style={styles.postMessage}>
          <Text>React Developer at Saylani Institute</Text>
        </View>
        <View style={styles.jobBrief}>
          <Text style={styles.jobBriefText}>
            We are Looking for a full stack React Developer with 3+ years of
            experience. Essential Requirements – Technical: • In-depth knowledge
            of modern HTML5, CSS, Bootstrap, React JavaScript, Git, ES6, Stylus.
            • Experience of CSS preprocessors, using variables and Mixins in
            CSS, Flexboxes and/or Bootstrap. • Experience of translating designs
            and wireframes into high-quality code. • Experience to develop a
            flexible and well-structured front-end architecture, along with the
            APIs to support it. • Experience with common front-end development
            tools such as Webpack, NPM, etc. • Experience in optimizing
            components for maximum performance across a vast array of
            web-capable devices and browsers. • Previous experience of using
            Resp APIs and GIT. Good to have: • Knowledge of React Hooks. •
            Knowledge of Mobx (or Redux type of architectures) Essential
            Requirements – General: • Bachelors in Computer Science or Software
            Engineering. • Excellent interpersonal and communication skills
            (oral and written)
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postWrapper: {
    // borderWidth: 1,
    // borderColor: "green",
    backgroundColor: "#fff",
    flex: 1,
    width: width,
    height: 300,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    // borderRadius: 15,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,

    // elevation: 7,
  },
  postTop: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#ebedf0",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  userImg: {
    flex: 1,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 50,
  },
  userDetail: {
    flex: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    borderTopRightRadius: 15,
  },
  userName: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
  requireBlood: {
    fontSize: 14,
  },
  placeName: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  postTime: {
    fontSize: 13,
    color: "gray",
  },

  postBody: {
    flex: 3,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  postMessage: {
    flex: 1,
    alignContent: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  map: {
    flex: 4,
  },
  jobBrief: {
    flex: 4,
    overflow: "hidden",
  },
  jobBriefText: {
    paddingLeft: 15,
  },
});
