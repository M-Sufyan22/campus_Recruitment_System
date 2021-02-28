import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  FlatList,
  Animated,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

const { width, height } = Dimensions.get("window");
let flatList;

const sliderData = [
  {
    title: "An investment in knowledge pays the best interest",
    url: img1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1,
  },
  {
    title: "Education is not preparation for life; education is life itself",
    url: img2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2,
  },
  {
    title: "knowledge is power. Information is liberating.",
    url: img3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3,
  },
];

function infiniteScroll() {
  const numberOfData = sliderData.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;

    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }

    // this.flatList.scrollToOffset({ animated: true, offset: scrollValue });

    if (this.flatList != null) {
      this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
    }
  }, 3000);
}

const Carousel = ({ data = sliderData }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  });

  if (data && data.length) {
    return (
      <View style={styles.crouselContainer}>
        <FlatList
          data={data}
          ref={(flatList) => {
            this.flatList = flatList;
          }}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ])}
        />
      </View>
    );
  }
  console.log("Please provide Images");
  return null;
};

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.url} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}> {item.title}</Text>
        {/* <Text style={styles.itemDescription}>{item.description}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width,
    height: height / 3,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    alignItems: "center",
  },

  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width,
    height: height / 3,
    resizeMode: "stretch",
  },
  itemTitle: {
    color: "yellow",
    fontSize: 27,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "red",
    fontSize: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  crouselContainer: {
    height: height / 3,
  },
});

export default Carousel;
