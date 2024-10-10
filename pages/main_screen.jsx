import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./../images/back_main.png")}
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
        resizeMode="cover"
      />
      <View automaticallyAdjustKeyboardInsets={true} style={styles.mainWindow}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
          Добро пожаловать в
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 30,
            marginTop: 10,
          }}
        >
          ЗЕРКАЛО
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            marginTop: 30,
          }}
        >
          Создай свой образ прямо сейчас. {"\n"}
          Примерь одежду, не заходя в примерочную
        </Text>
        <TouchableOpacity
          style={styles.catalogButton}
          onPress={() => navigation.navigate("CatalogScreen")}
        >
          <Text style={styles.catalogButtonText}>Перейти в каталог</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.aboutButton}>
          <Text style={styles.aboutButtonText}>Что такое “Зеркало”?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "relative",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  mainWindow: {
    position: "absolute",
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    paddingVertical: 40,
    paddingHorizontal: 18,
    zIndex: 2,
    borderRadius: 50,
  },
  catalogButton: {
    backgroundColor: "white",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  catalogButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: 600,
  },
  aboutButton: {
    backgroundColor: "rgba(67, 67, 67, 1)",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  aboutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
});

export default MainScreen;
