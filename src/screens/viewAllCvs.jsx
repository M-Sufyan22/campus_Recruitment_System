import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";

import JobVac from "../components/JobsVac";

const { width, height } = Dimensions.get("window");
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
export default function ViewAllCvs(props) {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.heading}>
            <Text style={styles.h1}>View All Candidates CV's </Text>
          </View>
          <View style={styles.section}>
            <FlatList
              style={styles.faltList}
              data={DATA}
              showsHorizontalScrollIndicator={false}
              renderItem={({ DATA }) => {
                return <JobVac />;
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  section: {
    width: width,
  },
  faltList: {
    width: width,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#f2f3f5",
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
});
