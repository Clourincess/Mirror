import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./pages/main_screen";
import CatalogScreen from "./pages/catalog_screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ProductScreen from "./pages/product_screen";
// import { useFonts } from "expo-font";
// import { RootStoreContext } from "./store/store_context";
// import RootStore from "./store/root_store";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   IBMRegular: require("./assets/fonts/IBMPlexSans-Regular.ttf"), //400
  //   IBMMedium: require("./assets/fonts/IBMPlexSans-Medium.ttf"), //500
  //   IBMSemiBold: require("./assets/fonts/IBMPlexSans-SemiBold.ttf"), //600
  // });
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {/* <RootStoreContext.Provider value={new RootStore()}> */}
        {/* {fontsLoaded && ( */}
        <>
          <Stack.Navigator
            initialRouteName="MainScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="CatalogScreen" component={CatalogScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
          </Stack.Navigator>
        </>
        {/* )} */}
        {/* </RootStoreContext.Provider> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
