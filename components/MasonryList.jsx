import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  RefreshControl,
} from "react-native";
import BusinessItem from "../components/BusinessItem";

const MasonryList = ({ businesses }) => {
  const width = useWindowDimensions().width;

  const numColumns = Math.ceil(width / 300);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ width: "100%" }}
    >
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((col, colIndex) => (
          <View style={styles.column} key={`column_${colIndex}`}>
            {businesses
              .filter((_, index) => index % numColumns == colIndex)
              .map((business) => (
                <BusinessItem business={business} key={business.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MasonryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingTop: -15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
