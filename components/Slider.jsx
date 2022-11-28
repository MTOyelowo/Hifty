import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

const width = Dimensions.get("window").width - 20;
let currentSlideIndex = 0;
let intervalId;

export default function Slider({ data, title }) {
  const [dataToRender, setDataToRender] = useState([]);
  const [visibleSlideIndex, setVisibleSlideIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    currentSlideIndex = viewableItems[0]?.index || 0;
    setVisibleSlideIndex(currentSlideIndex);
  });

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  const flatList = useRef();

  const handleScrollTo = (index) => {
    flatList.current.scrollToIndex({ animated: false, index });
  };

  const startSlider = () => {
    if (currentSlideIndex <= dataToRender.length - 2) {
      intervalId = setInterval(() => {
        flatList.current.scrollToIndex({
          animated: true,
          index: currentSlideIndex + 1,
        });
      }, 4000);
    } else {
      pauseSlider();
    }
  };

  useEffect(() => {
    if (dataToRender.length && flatList.current) {
      //startSlider();
    }
  }, [dataToRender.length]);

  const pauseSlider = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    const newData = [[...data].pop(), ...data, [...data].shift()];
    setDataToRender([...newData]);
  }, [data.length]);

  useEffect(() => {
    const length = dataToRender.length;
    // reset slide to first
    if (visibleSlideIndex === length - 1 && length) handleScrollTo(1);
    // reset slide to last
    if (visibleSlideIndex === 0 && length) handleScrollTo(length - 2);

    //handle scroll indicator bar
    const lastSlide = currentSlideIndex === length - 1;
    const firstSlide = currentSlideIndex === 0;

    if (lastSlide && length) setActiveSlideIndex(0);
    else if (firstSlide && length) setActiveSlideIndex(length - 2);
    else setActiveSlideIndex(currentSlideIndex - 1);
  }, [visibleSlideIndex]);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: item.image }} style={styles.slideImage} />
        <View style={styles.positionContainer}>
          <Text style={styles.position}>{item.position}</Text>
        </View>
        <View
          style={{
            width,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text numberOfLines={2} style={styles.title}>
            {item.name}
          </Text>
          <View style={styles.slideIndicatorContainer}>
            {data.map((item, index) => {
              return (
                <View
                  key={item.id}
                  style={[
                    styles.slides,
                    {
                      backgroundColor:
                        activeSlideIndex === index ? "#D15859" : "transparent",
                    },
                  ]}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderHead}>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <FlatList
        ref={flatList}
        data={dataToRender}
        keyExtractor={(item, index) => item.id + index}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        initialScrollIndex={1}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        onScrollBeginDrag={pauseSlider}
        onScrollEndDrag={startSlider}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width,
  },
  sliderHead: {
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  heading: {
    fontWeight: "700",
    color: "#672523",
    fontSize: 22,
  },
  title: {
    fontWeight: "700",
    color: "#672523",
    fontSize: 18,
    padding: 5,
    letterSpacing: 2,
  },
  slideIndicatorContainer: {
    flexDirection: "row",
    alignItem: "center",
    paddingTop: 10,
  },
  slides: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D15859",
    marginLeft: 5,
  },
  slideImage: {
    width,
    height: width / 2.0,
    borderRadius: 14,
  },
  positionContainer: {
    backgroundColor: "#F1D8D7",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    right: 5,
    top: 5,
  },
  position: {
    fontSize: 18,
    fontWeight: "700",
    color: "#672523",
  },
});
