import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductCard = ({
  gender = "Мужская",
  nameProduct = "Ветровка Prada",
  price = "30 000",
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductScreen")}
    >
      <Image
        source={require("./../images/man.png")}
        style={{
          width: "100%",
          maxHeight: 150,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />

      <Text style={styles.genderText}>{gender}</Text>
      <Text style={styles.nameProductText}>{nameProduct}</Text>
      <Text style={styles.priceText}>{price} ₸</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: "45%",
  },
  genderText: {
    color: "rgba(160, 160, 160, 1)",
    fontSize: 16,
    marginTop: 10,
  },
  nameProductText: {
    color: "black",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 700,
    color: "black",
    marginTop: 8,
  },
});

export default ProductCard;
