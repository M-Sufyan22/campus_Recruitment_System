import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import { color } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function RequestBlood(props) {
  // const [currency, setCurrency] = useState("US Dollar");
  // const propsData = props.route;
  // const { itemId, otherParam } = propsData.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>RequestBlood Screen</Text>
      <Button title="Go back" onPress={() => props.navigation.goBack()} /> */}
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}

      <View style={styles.formSec}>
        <View style={styles.heading}>
          <Text style={styles.h1}>Post a Blood Request For Free!</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formField}>
            <Text style={styles.label}>Hospital Location</Text>
            <TextInput style={styles.formInput} placeholder="Location" />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Blood</Text>
            <TextInput style={styles.formInput} placeholder="Blood Group" />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Write a post message</Text>
            <TextInput style={styles.formInput} placeholder="message" />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Contact</Text>
            <TextInput style={styles.formInput} placeholder="Phone" />
          </View>
          <View style={styles.formField}>
            <Button title="Post Request"></Button>
          </View>
        </View>
      </View>

      {/* <View>
        <Text> Demo Form </Text>
        <View>
          <TextInput placeholder="Email" />
          <TextInput secureTextEntry={true} placeholder="Password" />
          <Picker
            selectedValue={currency}
            onValueChange={(currentCurrency) => setCurrency(currentCurrency)}
          >
            <Picker.Item label="USD" value="US Dollars" />
            <Picker.Item label="EUR" value="Euro" />
            <Picker.Item label="NGN" value="Naira" />
          </Picker>
          <Text>Selected: {currency}</Text>
        </View>
      </View>*/}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  formSec: {
    flex: 1,
    width: width,

    paddingVertical: 5,
  },
  heading: {
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "red",
    paddingHorizontal: 8,
  },
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 10,
  },
  formGroup: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#cc1f50",
  },
  formField: {
    width: width,
    marginVertical: 5,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  label: { width: width - 35, marginVertical: 5, color: "#fff" },
  formInput: {
    backgroundColor: "#fff",
    color: "#000",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: width - 35,
    borderRadius: 3,
  },
});
