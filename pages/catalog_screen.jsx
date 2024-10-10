import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ProductCard from "../components/product_card";

const CatalogScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "rgba(233, 233, 233, 1)",
            height: 150,
            marginTop: 40,
            borderRadius: 10,
            marginHorizontal: 20,
          }}
        ></View>

        <ScrollView horizontal style={styles.filterScroll}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text>Футболка</Text>
            <Text>Футболка поло</Text>
            <Text>Футболка оверсайз</Text>
            <Text>Худи</Text>
          </View>
        </ScrollView>
        <View style={styles.productView}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  filterScroll: {
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  productView: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    rowGap: 40,
    marginTop: 30,
    marginBottom: 50
  },
});
export default CatalogScreen;
