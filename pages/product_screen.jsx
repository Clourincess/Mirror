import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import {
  arrowLeft,
  arrowRight,
  manInCLother,
  plusIcon,
} from "../images/images";

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../images/back_Product.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <View style={styles.centerView}>
        <TouchableOpacity style={styles.buttonTranslate}>
          <SvgXml xml={arrowLeft} width={25} />
        </TouchableOpacity>
        <SvgXml
          xml={manInCLother}
          width={250}
          height={700}
          style={{ marginTop: 100 }}
        />
        <TouchableOpacity style={styles.buttonTranslate}>
          <SvgXml xml={arrowRight} width={25} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.modalButton}>
        <SvgXml xml={plusIcon} width={35} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  centerView: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    marginTop: 350,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    height: 0,
  },
  buttonTranslate: {
    alignItems: "center",
    width: 60,
    height: 60,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
  },
  modalButton: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 250,
  },
});

export default ProductScreen;
